const Message = require('../models/message.model')
const Dialog = require('../models/dialog.model')
module.exports = async (req, res) => {
  const { partner, author, message } = req.body
  await Dialog.insertMany([
    {
      partner,
      author
    }
  ]).then(async (result) => {
    await Message.insertMany([
      {
        text: message,
        dialog: result[0]._id,
        author
      }
    ])
    return res.json({ message: 'Message is send', status: 'success' })
  })
}
