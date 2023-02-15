const router = require('express').Router()
const home = require('../controller/paginaInicial')

router.get('/', home)

module.exports = router