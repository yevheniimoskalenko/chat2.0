// const Message = require('../models/message.model')
const Dialog = require('../models/dialog.model')
module.exports = async (req, res) => {
  const { id } = req.params
  try {
    // await Dialog.find()
    //   .or([{ author: id }, { partner: id }])
    //   .populate(['author', 'partner', 'message'])
    //   .exec((err, result) => {
    //     if (err) throw err
    //     console.log(result)
    //     return res.json(result)
    //   })
    await Dialog.find({ author: id })
      .populate('messages')
      .exec((err, result) => {
        if (err) throw err
        console.log(result)
        return res.json(result)
      })

    // console.log(dialog)
  } catch (e) {
    return res.json(e)
  }
}
