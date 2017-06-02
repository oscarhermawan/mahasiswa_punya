var mongoose = require('mongoose')
var Schema = mongoose.Schema


var SchemaMember = new Schema({
  name : String,
  username: String,
  password: String,
  email: String,
  telpon: String,
  location: String,
  campus: String,
  member_id: String,
  transaction: [{type: Schema.Types.ObjectId, ref: 'Transaction'}]
})


var Member = mongoose.model('Member', SchemaMember)

module.exports = Member
