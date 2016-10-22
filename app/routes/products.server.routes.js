'use strict';

module.exports = function(app) {
	var products = require('../../app/controllers/products.server.controller');
	
	app.route('/products').get(products.list);
	app.route('/products').post(products.create);

	app.route('/products/:productId').get(products.read);
	app.route('/products/:productId').put(products.update);
	app.route('/products/:productId').delete(products.delete);

	// Finish by binding the article middleware
	// What's this? Where the productId is present in the URL
	// the logic to 'get by id' is handled by this single function
	// and added to the request object i.e. request.product.
	app.param('productId', products.productByID);
};