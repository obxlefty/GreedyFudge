'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Player Guess Schema
 */
var PlayerGuessSchema = new Schema({
	player: {
		type: Schema.ObjectId,
		ref: 'Player'
	},
	playerguess: {
		type: Schema.ObjectId,
		ref : 'Player'
	}
});


mongoose.model('PlayerGuess', PlayerGuessSchema);
