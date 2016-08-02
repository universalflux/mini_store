var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');

app.use(bodyParser.json());
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname + '/client')));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen('2090', function(req, res){
	console.log("Listening on " + this.address().port);
});