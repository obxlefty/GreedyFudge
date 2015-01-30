'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Game Schema
 */
var GameSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	pointsToWin: {
		type: Number,
		default: 20
	},
	winner: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	players : [{
		type : Schema.ObjectId,
		ref : 'Player'
	}],
	turns : [{
	    type : Schema.ObjectId,
	    ref : 'Turn'
	}]
});




mongoose.model('Game', GameSchema);