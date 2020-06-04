const { Schema, model } = require('mongoose')

const message = new Schema({
  text: {
    type: String,
    require: Boolean
  },
  dialog: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  author: { type: Schema.Types.ObjectId, ref: 'users', required: true },
  date: {
    type: Date,
    default: Date.now
  }
})
module.exports = model('messages', message)
