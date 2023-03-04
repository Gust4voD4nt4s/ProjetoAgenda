const router = require('express').Router()
const homeController = require('../controller/homeController')
const loginController = require('../controller/loginController')
const registerController = require('../controller/registerController')

router.get('/home', homeController)
router.get('/login', loginController)
router.get('/register', registerController)

module.exports = router