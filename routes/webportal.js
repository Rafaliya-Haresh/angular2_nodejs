'use strict';

var users = require('../controllers/users');
var cors = require('cors');
module.exports = function(app) {
	// --
	// User
	app.use(cors());
	app.post('/users/create', users.createSchool);
	app.get('/users/list', users.list);
	app.get('/users/delete/:id', users.delete);
	app.get('/users/edit/:id', users.edit);
	app.post('/users/update', users.update);
}