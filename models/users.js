'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
	description: String,
	location: String
});



module.exports = mongoose.model('User', userSchema);