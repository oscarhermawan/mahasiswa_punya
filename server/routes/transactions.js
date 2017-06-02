var express = require('express')
var router = express.Router()
var transactionController = require('../controllers/transactions.js')
var decodedJwt = require('../helpers/JwtVerify.js')


router.post('/', decodedJwt.verifyToken, transactionController.create)
router.get('/', transactionController.read)
// router.put('/:id', decodedJwt.verifyToken, itemController.update)
// router.delete('/', decodedJwt.verifyToken, itemController.delete)

// decodedJwt.verifyToken

module.exports =router
