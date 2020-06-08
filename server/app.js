const app = require('express')()
const server = require('http').createServer(app)
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const bodyParser = require('body-parser')
const upload = require('express-fileupload')
const io = require('socket.io')(server, { serveClient: true })
const authLogin = require('./routes/auth')
const chat = require('./routes/chat')
const uploads = require('./routes/upload')
require('./sockets.js')(io)
mongoose
  .connect(process.env.db, {
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
app.use(upload())

app.use(bodyParser.json())

app.use('/api', authLogin)
app.use('/chat', chat)
app.use('/upload', uploads)
module.exports = {
  app,
  server
}
