const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const users = require('./user')()
const m = (name, text, id) => ({ name, text, id })
io.on('connection', (socket) => {
  socket.on('userJoin', (payload, cb) => {
    if (!payload.name || !payload.room) {
      return cb('no valid')
    }
    socket.join(payload.room)
    users.remove(socket.id)
    users.add({
      id: socket.id,
      name: payload.name,
      room: payload.room
    })
    cb({ userId: socket.id })
    socket.emit('newMessage', m('admin', `Welcome ${payload.name}`))
    socket.broadcast
      .to(payload.room)
      .emit('newMessage', `User connected: ${payload.name}`)
  })
  socket.on('createMessage', (data, cb) => {
    if (!data.message) {
      return cb(`message is clear`)
    }
    const user = users.get(data.id)
    if (user) {
      io.to(user.room).emit('newMessage', m(user.name, data.message, data.id))
    }
    cb()
  })
})

module.exports = {
  app,
  server
}
