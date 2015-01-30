'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
	game = mongoose.model('game'),
	_ = require('lodash');

/**
 * Create a game
 */
exports.create = function(req, res) {
	var game = new game(req.body);
	game.players = req.players;

	game.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(game);
		}
	});
};

/**
 * Show the current game
 */
exports.read = function(req, res) {
	res.json(req.game);
};

/**
 * Update a game
 */
exports.update = function(req, res) {
	var game = req.game;

	game = _.extend(game, req.body);

	game.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(game);
		}
	});
};

/**
 * List of games
 */
exports.list = function(req, res) {
	game.find().sort('-created').populate('players').exec(function(err, games) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(games);
		}
	});
};

/**
 * game middleware
 */
exports.gameByID = function(req, res, next, id) {
	game.findById(id).populate('players').exec(function(err, game) {
		if (err) return next(err);
		if (!game) return next(new Error('Failed to load game ' + id));
		req.game = game;
		next();
	});
};

