const { Schema, model } = require('mongoose')

const message = new Schema(
  {
    text: {
      type: String,
      require: Boolean
    },
    dialog: {
      type: Schema.Types.ObjectId,
      ref: 'user'
    },
    author: { type: Schema.Types.ObjectId, ref: 'user' },
    date: {
      type: Date,
      default: Date.now
    }
  },
  {
    versionKey: false
  }
)
module.exports = model('Message', message, 'messages')
