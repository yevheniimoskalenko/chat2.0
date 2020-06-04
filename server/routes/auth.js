const { Router } = require('express')
const jwt = require('express-jwt')
const keys = require('../keys')
const create = require('../controllers/create.controller.js')
const login = require('../controllers/login.controller.js')
const verefy = require('../controllers/verefy.controller.js')
const logout = require('../controllers/logout.controller.js')

const router = Router()
router.post('/create', create)
router.post('/login', login)
router.post('/verefy', verefy)
router.post('/logout', logout)

router.get('/user', jwt({ secret: keys.SECRET }), (req, res, next) => res.json({ user: req.user }))
module.exports = router
