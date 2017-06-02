var mongoose = require('mongoose')
var Schema = mongoose.Schema


var SchemaTransaction = new Schema({
  id_pembeli : {
    type : Schema.Types.ObjectId,
    ref:'Member',
    required:true
  },
  tanggal_pembelian:{
    type:Date,
    default: Date.now
  },
  total_harga:{
    type:String,
    required:true
  },
  keranjang:[{
    type : Schema.Types.ObjectId,
    ref:'Item'
  }]
})


var Transaction = mongoose.model('Transaction', SchemaTransaction)

module.exports = Transaction
