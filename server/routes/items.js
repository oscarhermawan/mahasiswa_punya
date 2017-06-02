var express = require('express')
var router = express.Router()
var itemController = require('../controllers/items.js')
var decodedJwt = require('../helpers/JwtVerify.js')


router.post('/', decodedJwt.verifyToken, itemController.create)
router.get('/', itemController.read)
router.put('/:id', decodedJwt.verifyToken, itemController.update)
router.delete('/', decodedJwt.verifyToken, itemController.delete)

// decodedJwt.verifyToken

module.exports =router
