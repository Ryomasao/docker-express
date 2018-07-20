var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Member = new Schema({
    name : { type: String, require: true }, 
    color : { type: String, require: true }
});

module.exports = mongoose.model('member', Member)