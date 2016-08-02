var customers = require('./../controllers/customers.js');
var orders = require('./../controllers/orders.js');
var products = require('./../controllers/products.js');

module.exports = function(app){

	app.get('/customers', function(req, res){
		customers.index(req, res);
	});

	app.post('/customers', function(req, res){
		customers.show(req, res);
	});

	app.delete('/customers/:id', function(req, res){
		customers.destroy(req, res);
	});

	app.get('/orders', function(req, res){
		orders.index(req, res);
	});

	app.post('/orders', function(req, res){
		orders.show(req, res);
	})

	app.delete('/orders/:id', function(req, res){
		orders.destroy(req, res);
	})

	app.get('/dashboard', function(req, res){
		res.json(res);
	})

	app.get('/products', function(req, res){
		products.index(req, res);
	})

	app.post('/update', function(req, res){
		products.add(req, res);
	})

	app.post('/products', function(req, res){
		products.show(req, res);
	})

	app.delete('/products/:id', function(req, res){
		products.destroy(req, res);
	})
}