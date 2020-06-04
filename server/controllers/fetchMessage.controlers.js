const Message = require('../models/message.model')
const Dialog = require('../models/dialog.model')
module.exports = async (req, res) => {
  try {
    await Dialog.find({ author: req.params.id })
      .populate('users')
      .exec((error, result) => {
        console.log(result)

        return res.json(result)
      })
  } catch (e) {
    return res.json(e)
  }
}
