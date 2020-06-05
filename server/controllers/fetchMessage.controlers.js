// const Message = require('../models/message.model')
const Dialog = require('../models/dialog.model')
module.exports = async (req, res) => {
  const { id } = req.params
  try {
    await Dialog.find({ author: id })
      .populate('author')
      .exec((error, result) => {
        console.log(result)
        return res.json(result)
      })
  } catch (e) {
    return res.json(e)
  }
}
