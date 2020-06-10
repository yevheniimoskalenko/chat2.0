const Dialog = require('../models/dialog.model')
module.exports = async (req, res) => {
  const { id } = req.params
  try {
    await Dialog.find({ author: id })
      .populate(['author', 'partner', 'lastMessage'])
      .exec(async (err, result) => {
        if (err) throw err
        return await res.json(result)
      })
  } catch (e) {
    return res.json(e)
  }
}
