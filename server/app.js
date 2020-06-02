const app = require('express')()
const server = require('http').createServer(app)
const mongoose = require('mongoose')

const bodyParser = require('body-parser')
const authLogin = require('./routes/auth')
const io = require('socket.io')(server)

mongoose
  .connect('mongodb+srv://yevhenii:was123456789was@cluster0-vrxpp.mongodb.net/chat', {
    useNewUrlParser: true,
    useUnifiedTopology: true
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
module.exports = {
  app,
  server
}
