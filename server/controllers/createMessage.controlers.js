const Message = require('../models/message.model')
const Dialog = require('../models/dialog.model')
module.exports = async (req, res) => {
  const { partner, author, message } = req.body

  const findDialog = Dialog.find({ partner, author })
  if (findDialog) {
    const dialog = new Dialog({
      partner,
      author
    })
    await dialog.save()

    const messages = new Message({
      text: message,
      dialog: dialog._id,
      author
    })
    await messages.save()
    await Dialog.updateMany({ _id: dialog._id }, { $set: { lastMessage: messages._id } })

    return res.json({ message: 'Message is send', status: 'success', data: `${messages}` })
  } else {
    return res.json({ message: 'Message is send', status: 'error' })
  }
}
