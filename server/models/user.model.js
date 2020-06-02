const { model, Schema } = require('mongoose')

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  lastDate: {
    type: Date,
    default: Date.now
  },
  date: {
    type: Date,
    default: Date.now
  }
})
module.exports = model('User', UserSchema)
