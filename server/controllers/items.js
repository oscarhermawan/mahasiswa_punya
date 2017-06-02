var express = require('express')
var Item = require('../models/item.js')


module.exports = {
  create : (req, res)=>{

    console.log('masuk controller items',req.body);

    //var username = req.decoded.username
    var createItem = new Item({
      title : req.body.title,
      description : req.body.description,
      price: req.body.price,
      image: req.body.image,
      category: req.body.category,
      id_member: req.decoded.id
    })
    createItem.save((err, result)=>{
      if(!err){
        res.send(result)
        console.log(result);
      } else {
        res.send(err)
      }
    })
  },
  read: (req, res)=>{
    Item.find({})
    .populate('id_member', 'username')
    .exec(function(err, item){
      if(!err){
      res.send(item)
    } else {
      res.send(err)
    }
    })
  },
  update: (req, res)=>{
    var username = req.decoded.username
    Item.findByIdAndUpdate(req.params.id, {$set: {
      title : req.body.title,
      description : req.body.description,
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
    var username = req.decoded.username
    Item.remove({_id: req.body.id})
    .then((result)=>{
      res.send(result)
    })
    .catch((err)=>{
      res.send(err)
    })
  }
}
