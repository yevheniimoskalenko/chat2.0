const jsonwebtoken = require('jsonwebtoken')
const bcrypt = require('bcrypt-nodejs')
const User = require('../models/user.model')
const keys = require('../keys')

module.exports = async (req, res) => {
  const { email, password } = req.body
  const candidat = await User.findOne({ email })
  if (candidat) {
    bcrypt.compare(password, candidat.password, (result) => {
      if (result) {
        const token = jsonwebtoken.sign(
          {
            email,
            id: candidat._id,
            admin: candidat.admin,
            ticket: candidat.ticket
          },
          keys.SECRET,
          { expiresIn: 60 * 60 * 1000 }
        )
        return res.json({ token })
      }
      return res.status(401).json({ message: 'Електрона пошта ведена не вірно або пароль.' })
    })
  } else {
    return res.status(401).json({ message: 'Електрона пошта ведена не вірно або пароль.' })
  }
}
