var express = require('express'),
	init = require('./config/init')(),
	config = require('./config/config'),
	app = express(),
	server = require('http').Server(app),
	path    = require('path'),
	mongoose = require('mongoose'),
	session = require('express-session'),
	methodOverride = require('method-override'),
	bodyParser = require('body-parser'),
	mongoStore = require('connect-mongo')({
		session: session
	});
	

// --
// Connect mongoose
mongoose.connect(config.db, function(err) {
	if (err) {
		console.log('Could not connect to MongoDB!');
		console.log("========", err);
	}
});

// --
// Set express configs
process.env.PORT = process.env.PORT || 3000;
app.set('port', process.env.PORT);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': true}));

app.use(methodOverride());

app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
	require('./models/users.js');
app.use(express.static(path.join(__dirname, 'client')));

// --
// Define routes/controller
require('./routes/webportal')(app);


app.all('*', function(req, res){
  res.status(200).sendFile(path.resolve(__dirname + '/client/index.html'));
});

// Start server
server.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});

module.exports = app;