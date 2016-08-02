var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

module.exports = (function(){
	return {
		index: function(req, res){
			Customer.find({}, function(err, results){
				if(err){
					console.log(err);
			 	} else {
			 		console.log('Success!!');
			 		res.json(results);
			 	}
			})
		},
		show: function(req, res){
			console.log(req.body);
			Customer.create({name: req.body.name}, function(err){
				if(err){
					console.log(err);
				} else {
					console.log('Created!');
					console.log(req.body.name);
				}
			})
		},
		destroy: function(req, res){
			console.log(req.body.id);
			Customer.remove().exec({_id: req.body._id}, function(err){
				if(err){
					console.log(err);
				} else {
					console.log('Destroyed');
				}
			})
		}
	}
})();