const Message = require('../models/message.model')
module.exports = async (req, res) => {
  try {
    const messages = await Message.find({ dialog: req.params.id })
    return res.json(messages)
  } catch (e) {
    return res.json({ status: 'error', message: 'chat not found' })
  }
}
