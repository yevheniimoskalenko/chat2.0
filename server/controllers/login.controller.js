const jsonwebtoken = require('jsonwebtoken')
const bcrypt = require('bcrypt-nodejs')
const User = require('../models/user.model')
const keys = require('../keys')

module.exports = async (req, res) => {
  const { email, password } = req.body
  const candidat = await User.findOne({ email })
  if (candidat) {
    bcrypt.compare(password, candidat.password, (err, result) => {
      if (result) {
        const token = jsonwebtoken.sign(
          {
            email,
            id: candidat._id,
            name: candidat.name
          },
          keys.SECRET,
          { expiresIn: 60 * 60 * 1000 }
        )
        return res.json({ token })
      }
      if (err) {
        return res.status(401).json({ message: 'Електрона пошта ведена не вірно або пароль.', status: 'error' })
      }
      return res.status(401).json({ message: 'Електрона пошта ведена не вірно або пароль.', status: 'error' })
    })
  } else {
    return res.status(401).json({ message: 'Електрона пошта ведена не вірно або пароль.', status: 'error' })
  }
}
