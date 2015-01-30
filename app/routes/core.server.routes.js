'use strict';

module.exports = function(app) {
	// Root routing
	var core = require('../../app/controllers/core.server.controller');
	app.route('/question').get(core.getQuestion);
	app.route('/').get(core.index);
	
};