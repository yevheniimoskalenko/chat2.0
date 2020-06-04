const { model, Schema } = require('mongoose')

const dialog = new Schema({
  partner: { type: Schema.Types.ObjectId, ref: 'user', required: true },
  author: { type: Schema.Types.ObjectId, ref: 'user', required: true },
  messages: [
    {
      type: Schema.Types.ObjectId,
      ref: 'messages'
    }
  ],
  readed: {
    type: Boolean,
    defaul: Boolean
  }
})

module.exports = model('dialogs', dialog)
