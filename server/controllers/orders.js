var mongoose = require('mongoose');
var Order = mongoose.model('Order');

module.exports = (function(){
	return{
		index: function(req, res){
			console.log(req);
			Order.find({}, function(err, results){
				if(err){
					console.log(err);
				} else {
					console.log('Awesome!');
					res.json(results);
				}
			})
		},
		show: function(req, res){
			Order.create({name:req.body.name.name, product: req.body.product.name, qty: req.body.qty},
				function(err){
					if (err){
						console.log(err);
					} else {
						console.log('Order created!')
					}
				})
		},
		destroy: function(req, res){
			Order.remove().exec({_id: req.body._id},function(err){
				if (err) {
					console.log(err);
				} else {
					console.log('Order destroyed!');
				}
			})
		}
	}
})();