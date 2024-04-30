
const router = require('express').Router()
const photoController = require('./controllers/photoController.js')

router.use('/photos',photoController)

module.exports = router
