const Message = require('./models/message.model')
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
    socket.on('createMessage', (data, cb) => {
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
    })
    socket.on('disconnect', (socket) => {
      console.log('disconnect')
    })
    socket.on('receiveHistory', async () => {
      const messages = await Message.find({ dialog: '5eda29bf43be6e1ae071f1f1' })
      socket.emit('history', messages)
    })
  })
}
