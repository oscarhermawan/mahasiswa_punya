var express = require('express')
var mongoose = require('mongoose')
var Member = require('../models/member.js')
var bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')
require('dotenv').config()


module.exports = {
  signup: (req, res)=>{
    // var member = req.body.member
    var signUpMember = new Member({
      name : req.body.name,
      username: req.body.username,
      email: req.body.email,
      telpon: req.body.telpon,
      location: req.body.location,
      campus: req.body.campus,
      password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    })
    signUpMember.save((err, result)=>{
      if(!err){
        res.send(result)
      } else {
        res.send(err)
      }
    })
  },

  signupfb: (req, res)=>{

  },

  signin: (req, res)=>{
      var user = req.user
      if(user.hasOwnProperty("massage")){
      res.send(user.massage)
      } else {
      var token = jwt.sign({
        username: user.username, id: user._id
      }, process.env.JWT_SECRET, {expiresIn: '1h'})
      res.send({
        token: token,
        msg: user.msg
      })
    }
  },

  delete: (req, res)=>{
    Member.remove({_id: req.params.id})
    .then((deleted)=>{
      res.send(deleted)
    })

    .catch((err)=>{
      res.send(err)
    })
  },

  update: (req, res)=>{
    Member.findOne({_id: req.params.id}, (err, member)=>{
      var updateMember = new member({
        name : req.body.name,
        username: req.body.username,
        email: req.body.email,
        telpon: req.body.telpon,
        location: req.body.location,
        campus: req.body.campus,
        password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
      })
      updateMember.save((err, result)=>{
        if(!err){
          res.send(result)
        }else {
          res.send(err)
        }
      })
    })
  },

  read: (req, res)=>{
    Member.find({})
    .then((result)=>{
      res.send(result)
    })
    .catch((err)=>{
      res.send(err)
    })
  }
}
