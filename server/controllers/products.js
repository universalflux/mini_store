var mongoose = require('mongoose');
var Product = mongoose.model('Product');

module.exports = (function(){
	return{
		'amount': 5,
		index: function(req, res){
			console.log(req);
			Product.find({}, {}, {limit: this.amount}, function(err, results){
				if(err){
					console.log(err);
				} else {
					console.log('Awesome!');
					res.json(results);
				}
			})
		},

		show: function(req, res){
			Product.create({name: req.body.name, image: req.body.img, description: req.body.description, qty: req.body.qty }, 
				function(err){
				if (err) {
					console.log('There was an error!');
				} else {
					console.log('Success! Product successfully inserted');
				}
			})
		},
		destroy: function(req, res){
			Product.remove().exec({_id: req.body._id}, function(err){
				if (err) {
					console.log(err);
				} else {
					console.log('Product destroyed!');
				}
			})
		},
		add: function(req, res) {
			this.amount = req.body.amount;
			Product.find({}, {}, {limit: this.amount}, function(err, results){
				if(err){
					console.log(err);
				} else {
					console.log('Awesome!');
					res.json(results);
				}
			})
		}
	}
})();