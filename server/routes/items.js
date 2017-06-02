var express = require('express')
var router = express.Router()
var itemController = require('../controllers/items.js')
var decodedJwt = require('../helpers/JwtVerify.js')


router.post('/', itemController.create)
router.get('/', itemController.read)
router.put('/:id', itemController.update)
router.delete('/', itemController.delete)

// decodedJwt.verifyToken

module.exports =router
