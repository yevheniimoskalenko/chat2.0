const app = require('express')()
const server = require('http').createServer(app)
const mongoose = require('mongoose')

const bodyParser = require('body-parser')
const authLogin = require('./routes/auth')
const chat = require('./routes/chat')

const io = require('socket.io')(server, { serveClient: true })
require('./sockets.js')(io)
mongoose
  .connect('mongodb+srv://yevhenii:was123456789was@cluster0-vrxpp.mongodb.net/chat', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    /* eslint-disable no-console */
    console.log('connect has started...')
  })
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)
app.use(bodyParser.json())

app.use('/api', authLogin)
app.use('/chat', chat)
module.exports = {
  app,
  server
}
