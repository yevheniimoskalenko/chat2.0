module.exports = (io) => {
  io.on('connection', (socket) => {
    const m = (name, text, id, date) => ({ name, text, id, date })
    console.log(`user is connected`)
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
      io.emit('newMessage', m(data.name, data.text, data.id, new Date()))
      cb()
    })
  })
}
