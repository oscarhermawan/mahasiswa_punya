var express = require('express')
var jwt = require('jsonwebtoken')
require('dotenv').config()


module.exports = {
  verifyToken: (req, res, next)=>{
    console.log('masuk jwt');
    console.log(req.headers);
    jwt.verify(req.headers.token, process.env.JWT_SECRET, (err, decoded)=>{
      if(decoded){
        console.log('decoded', decoded);
        req.decoded = decoded
        console.log('req decoded', req.decoded);
        next();
      }
      else{
        res.send(err)
      }
    })
  }
}
