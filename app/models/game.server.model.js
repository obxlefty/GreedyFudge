'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Artist Schema
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
	}]
});


mongoose.model('game', GameSchema);