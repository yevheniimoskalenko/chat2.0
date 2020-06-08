const { Router } = require('express')
const upload = require('../controllers/upload.controller.js')

const router = Router()
router.post('/file', upload)

module.exports = router
