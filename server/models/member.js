var mongoose = require('mongoose')
var Schema = mongoose.Schema


var SchemaMember = new Schema({
  name : String,
  username: {
    type:String,
    unique: true
  },
  password: String,
  email: String,
  telpon: String,
  location: String,
  campus: String,
  member_id: String,
})


var Member = mongoose.model('Member', SchemaMember)

module.exports = Member
