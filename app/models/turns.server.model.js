'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Turn Schema
 */
var TurnSchema = new Schema({
	albums : {
	    type : Schema.ObjectId,
	    ref : 'Album'
	},
	artistguesses : [{
	    type : Schema.ObjectId,
	    ref : 'ArtistGuess'
	}],
	playerguesses : [{
		type : Schema.ObjectId,
		ref : 'PlayerGuess'
	}]
});


mongoose.model('Turn', TurnSchema);