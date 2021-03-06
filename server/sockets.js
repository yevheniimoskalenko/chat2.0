const Message = require('./models/message.model')
const Dialog = require('./models/dialog.model')
module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('connect user')
    const m = (name, text, author, dialog, date) => ({ name, text, author, dialog, date })
    socket.on('userJoined', async (data, cb) => {
      if (!data.name) {
        return cb('data is not corrected')
      }
      cb()
    })
    socket.on('createMessage', async (data, cb) => {
      if (!data.name) {
        return cb(`message is required`)
      }
      const date = new Date()
      io.emit('newMessage', m(data.name, data.text, data.author, data.dialog, date))
      const newMessage = new Message({
        text: data.text,
        author: data.author,
        dialog: data.dialog,
        date
      })
      cb()
      newMessage.save()
      await Dialog.updateMany({ _id: data.dialog }, { $set: { lastMessage: newMessage._id } })
    })
    socket.on('disconnect', (socket) => {
      console.log('disconnect')
    })
    socket.on('receiveHistory', async (data) => {
      const messages = await Message.find({ dialog: data.dialog })
        .sort({ date: -1 })
        .limit(50)
        .sort({ date: 1 })
        .lean()
      socket.emit('history', messages)
    })
  })
}
