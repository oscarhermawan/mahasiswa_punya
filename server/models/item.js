var mongoose = require('mongoose')
var Schema = mongoose.Schema


var SchemaItem = new Schema({
  title : {
    type:String,
    required:true
  },
  description : {
    type:String,
    required:true
  },
  price: {
    type:Number,
    required:true
  },
  image: {
    type:String,
    required:true
  },
  category: {
    type:String,
    required:true
  },
  id_member:{
    type: Schema.Types.ObjectId, ref: 'Member'
  }
})


var Item = mongoose.model('Item', SchemaItem)

module.exports = Item
