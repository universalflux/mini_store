var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema ({
	name: String,
	image: String,
	description: String,
	qty: Number
},
{
	timestamps: true
});

mongoose.model('Product', ProductSchema);
var Product = mongoose.model('Product');