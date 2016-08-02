var mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema ({
	name: String
},
{
	timestamps: true
});

mongoose.model('Customer', CustomerSchema);
