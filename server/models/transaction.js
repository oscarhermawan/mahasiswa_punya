var mongoose = require('mongoose')
var Schema = mongoose.Schema


var SchemaTransaction = new Schema({
  seller_id : {type: String, ref: 'Member'},
  buyer_id: {type: String, ref: 'Member'},
  item_id: {type: String, ref: 'Item'},
  inquary_create_date: Date,
  sell_date: Date
})


var Transaction = mongoose.model('Transaction', SchemaTransaction)

module.exports = Transaction
