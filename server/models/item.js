var mongoose = require('mongoose')
var Schema = mongoose.Schema


var SchemaItem = new Schema({
  name : String,
  price: Number,
  image: String
})


var Item = mongoose.model('Item', SchemaItem)

module.exports = Item
