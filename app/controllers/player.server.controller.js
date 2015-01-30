'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
	player = mongoose.model('player'),
	_ = require('lodash');

/**
 * Create an player
 */
exports.create = function(req, res) {
	var player = new player(req.body.user);

	player.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(player);
		}
	});
};

/**
 * Show the current player
 */
exports.read = function(req, res) {
	res.json(req.player);
};

/**
 * List of players
 */
exports.list = function(req, res) {
	player.find().sort('-created').exec(function(err, players) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(players);
		}
	});
};

/**
 * game middleware
 */
exports.playrByID = function(req, res, next, id) {
	player.findById(id).exec(function(err, player) {
		if (err) return next(err);
		if (!player) return next(new Error('Failed to load player ' + id));
		req.player = player;
		next();
	});
};

