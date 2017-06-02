var express = require('express')
var Transaction = require('../models/transaction.js')


module.exports = {
  create : (req, res)=>{
    let tmp = []
  req.body.value.forEach(function(data){
    for(let i=0; i<data.jumlah; i++){
      tmp.push(data._id)
    }
  })
  var input = new Transaction({
    id_pembeli:req.decoded.id,
    total_harga:req.body.totalharga,
    keranjang:tmp
  })
  input.save(function(err, input){
    if(err){
      res.send(err)
    }
    else{
      res.send(input)
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
