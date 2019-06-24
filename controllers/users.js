'use strict';

var User = require('../models/users.js'),
	config = require('../config/config');


// --
// User login
exports.createSchool = function(req, res) {

	var obj = {
		name: req.body.name,
		description: req.body.description,
		location: req.body.location
	}

	User.create(obj, function(err, result){
		if(err){
			return res.status(500).send(err);
		}
		return res.status(200).send(result);
	})

};

exports.list = function(req, res) {
	User.find({}, function(err, result){
		if(err){
			return res.status(500).send(err);
		}
		return res.status(200).send(result);
	})

};

exports.delete = function(req, res){
	User.remove({_id: req.params.id}, function(err, result){
		if(err){
			return res.status(500).send(err);
		}
		return res.status(200).send({'delete': 'users deleted successfully'});
	});
}


exports.edit = function(req, res){
	User.findOne({_id: req.params.id}, function(err, result){
		if(err){
			return res.status(500).send(err);
		}
		return res.status(200).send(result);
	});
}


exports.update = function(req, res){
	
	User.findOne({_id: req.body._id}, function(err, result){
		if(err){
			return res.status(500).send(err);
		}
		result.name = req.body.name;
		result.description = req.body.description;
		result.location = req.body.location;
		result.save();
		return res.status(200).send(result);
	});
}

