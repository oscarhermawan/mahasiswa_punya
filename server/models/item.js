var mongoose = require('mongoose')
var Schema = mongoose.Schema


var SchemaItem = new Schema({
  title : String,
  description : String,
  price: Number,
  image: String,
  category: String,
  id_member:{
    type: Schema.Types.ObjectId, ref: 'Member'
  }
})


var Item = mongoose.model('Item', SchemaItem)

module.exports = Item
