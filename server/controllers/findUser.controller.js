const User = require('../models/user.model')
module.exports = async (req, res) => {
  const { query } = req.body
  try {
    if (query.length > 0) {
      const user = await User.find({ name: { $regex: query, $options: 'i' } }, { password: 0, lastDate: 0, date: 0, createdAt: 0, updatedAt: 0 })
      console.log(user)
      return res.json({ user })
    } else {
      return res.json({ message: 'you need keypress', status: 'error' })
    }
  } catch (e) {
    console.log(e)
    return res.json({ message: 'user not found', status: 'error' })
  }
}
