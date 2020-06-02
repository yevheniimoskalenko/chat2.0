const axios = require('axios')
module.exports = async (req, res) => {
  const secret = `6LealJMUAAAAAL7UNCv2jgaGfBn6Hs7EL0biZ8NF`
  try {
    await axios({
      method: 'POST',
      url: `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${req.body.token}`
    }).then((result) => {
      if (result.data.success === true) {
        return res.json(result.data)
      }
    })
  } catch (e) {
    return res.json(e)
  }
}
