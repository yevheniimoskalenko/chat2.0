const { Router } = require('express')
const create = require('../controllers/create.controller.js')
const login = require('../controllers/login.controller.js')
const verefy = require('../controllers/verefy.controller.js')
const router = Router()
router.post('/create', create)
router.post('/login', login)
router.post('/verefy', verefy)
module.exports = router
