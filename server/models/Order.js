var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema ({
	name: String,
	product: String,
	qty: Number
},
{
	timestamps: true
});

mongoose.model('Order', OrderSchema);
var Order = mongoose.model('Order');