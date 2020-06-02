const bcrypt = require('bcrypt-nodejs')
const User = require('../models/user.model')
const salt = bcrypt.genSaltSync(10)
module.exports = async (req, res) => {
  const { email, password, name } = req.body
  const candidat = await User.findOne({ email })
  if (candidat) {
    res.status(409).json({ message: 'Користувач з електроною поштою, уже зареєстрований був раніше.', status: 'error' })
  } else {
    const user = new User({
      email,
      password: bcrypt.hashSync(password, salt),
      name
    })
    await user.save()
    return res.status(201).json({ status: 'success', message: 'user create' })
  }
}
