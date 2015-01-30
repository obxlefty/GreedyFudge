'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Player Schema
 */
var ArtistGuessSchema = new Schema({
	player: {
		type: Schema.ObjectId,
		ref: 'Player'
	},
	artist: {
		type: String,
		default: '',
		required : 'Artist guess is required'
	}
});


mongoose.model('ArtistGuess', ArtistGuessSchema);
