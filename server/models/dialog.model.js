const { model, Schema } = require('mongoose')

const dialog = new Schema(
  {
    partner: { type: Schema.Types.ObjectId, ref: 'user' },
    author: { type: Schema.Types.ObjectId, ref: 'user' },
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
  },
  {
    versionKey: false
  }
)

module.exports = model('dialogs', dialog)
