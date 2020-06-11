const { Router } = require('express')
const finduser = require('../controllers/findUser.controller.js')
const createMessage = require('../controllers/createMessage.controlers.js')
const fetchMessage = require('../controllers/fetchMessage.controlers.js')
const fetchAllMessage = require('../controllers/fetchAllMessage.controlers.js')

const router = Router()
router.post('/finduser', finduser)
router.post('/createMessage', createMessage)
router.get('/fetchMessage/:id', fetchMessage)
router.get('/fetchAllMessage/:id', fetchAllMessage)
module.exports = router
