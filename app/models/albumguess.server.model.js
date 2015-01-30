'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Player Schema
 */
var AlbumGuessSchema = new Schema({
	player: {
		type: Schema.ObjectId,
		ref: 'Player'
	},
	album: {
		type: String,
		default: '',
		required : 'Album guess is required'
	}
});


mongoose.model('AlbumGuess', AlbumGuessSchema);
