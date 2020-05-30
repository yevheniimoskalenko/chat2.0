const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const m = (name, text, id) => ({ name, text, id })
io.on('connection', (socket) => {
  socket.on('userJoin', (payload, cb) => {
    if (!payload.name || !payload.room) {
      return cb('no valid')
    }
    cb({ userId: socket.id })
    socket.emit('newMessage', m('admin', `Welcome ${payload.name}`))
  })
  socket.on('createMessage', (data) => {
    setTimeout(() => {
      socket.emit('newMessage', {
        text: data.text + 'SERVER'
      })
    }, 500)
  })
})

module.exports = {
  app,
  server
}
