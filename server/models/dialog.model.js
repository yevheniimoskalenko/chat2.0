const { model, Schema } = require('mongoose')

const dialog = new Schema(
  {
    partner: { type: Schema.Types.ObjectId, ref: 'User' },
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    messages: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Message'
      }
    ],
    readed: {
      type: Boolean,
      defaul: Boolean
    },
    block: {
      type: Boolean,
      defaul: Boolean
    }
  },
  {
    versionKey: false
  }
)

module.exports = model('Dialog', dialog, 'dialogs')
