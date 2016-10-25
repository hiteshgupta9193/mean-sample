'use strict';

module.exports = function(app) {
	var categories = require('../../app/controllers/categories.server.controller');
	var users = require('../../app/controllers/users.server.controller');
	
	app.route('/categories').get(categories.list);
	app.route('/categories').post(users.requiresLogin, categories.create);

	app.route('/categories/:categoryId').get(categories.read);
	app.route('/categories/:categoryId').put(users.requiresLogin, categories.update);
	app.route('/categories/:categoryId').delete(users.requiresLogin, categories.delete);

	// Finish by binding the article middleware
	// What's this? Where the categoryId is present in the URL
	// the logic to 'get by id' is handled by this single function
	// and added to the request object i.e. request.category.
	app.param('categoryId', categories.categoryByID);
};