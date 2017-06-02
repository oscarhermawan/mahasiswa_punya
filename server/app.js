var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var cors = require('cors')
var passport = require('passport')
var localStrategy = require('passport-local')
var bcrypt = require('bcrypt')
var Member = require('./models/member.js')

mongoose.Promise = require('bluebird')
mongoose.connect('mongodb://localhost/group-week02', ()=>{
  console.log(`mongoose connected`);
})

var members = require('./routes/members.js')
var items = require('./routes/items.js')

passport.use(new localStrategy(
(username, password, done)=>{
  Member.findOne({username: username}, (err, user)=>{
    if(!user){
      return done(null, {message: `Username or password Invalid`})
    }
    if(!bcrypt.compareSync(password, user.password)){
      return done(null, {mesage: `Username or password Invalid`})
    }
    return done(null, user)
  })
}))


var app = express()
app.use(cors())
app.use(passport.initialize())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/api/members', members)
app.use('/api/items', items)

app.listen(3000)
console.log(`Connected to port 3000`);
