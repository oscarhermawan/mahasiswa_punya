var express = require('express')
var router = express.Router()
var memberController = require('../controllers/members.js')
var passport = require('passport')



router.post('/signup', memberController.signup)
router.get('/', memberController.read)
router.delete('/:id', memberController.delete)
router.post('/signin', passport.authenticate('local', {session: false}), memberController.signin)




module.exports = router
