const Message = require('./models/message.model')
module.exports = (io) => {
  io.on('connection', (socket) => {
    const m = (name, text, id, dialog, date) => ({ name, text, id, dialog, date })

    socket.on('userJoined', (data, cb) => {
      if (!data.name) {
        return cb('Данные некорректны')
      }
      socket.join(1)
      cb({ userId: socket.id })
    })
    socket.on('createMessage', (data, cb) => {
      if (!data.name) {
        return cb(`message is required`)
      }
      const date = new Date()
      io.emit('newMessage', m(data.name, data.text, data.id, data.dialog, date))
      const newMessage = new Message({
        text: data.text,
        author: data.id,
        dialog: data.dialog,
        date
      })
      cb()
      newMessage.save()
    })
    socket.on('disconnect', (socket) => {
      console.log('disconnect')
    })
  })
}
