var express = require('express')
var Transaction = require('../models/transaction.js')


module.exports = {
  create : (req, res)=>{
    var createTransaction = new Transaction({
      name : req.body.name,
      price: req.body.price,
      image: req.body.image
    })
    createTransaction.save((err, result)=>{
      if(!err){
        res.send(result)
        console.log(result);
      } else {
        res.send(err)
      }
    })
  },
  read: (req, res)=>{
    Transaction.find((err, result)=>{
      if(!err){
        res.send(result)
      } else {
        res.send(err)
      }
    })
  },
  update: (req, res)=>{
    Transaction.findByIdAndUpdate(req.params.id, {$set: {
      name : req.body.name,
      price: req.body.price,
      image: req.body.image
    }}, { new : true }, (err, result)=>{
      if(!err){
        res.send(result)
      } else {
        res.send(`Incorect reference Id`)
      }
    })
  },
  delete: (req, res)=>{
    Transaction.remove({_id: req.body.id})
    .then((result)=>{
      res.send(result)
    })
    .catch((err)=>{
      res.send(err)
    })
  }
}
