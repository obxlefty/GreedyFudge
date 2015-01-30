'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Player Schema
 */
var PlayerSchema = new Schema({
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	},
	points: {
		type: Number,
		default: 0
	}
});


/**
 * Create instance method for authenticating user
 */
PlayerSchema.methods.givePoints = function( points ) {
	this.points += points;
	
	return this.points;
};

mongoose.model('Player', PlayerSchema);
