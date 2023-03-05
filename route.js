const route = require('express').Router()
const homeController = require('./src/controller/homeController')
const loginController = require('./src/controller/loginController')
const registerController = require('./src/controller/registerController')

route.get('/home', homeController.home)
route.get('/login', loginController)
route.get('/register', registerController)
route.post('/login/success', homeController.treatPost)
route.post('/register/success', homeController.treatPost)

module.exports = route