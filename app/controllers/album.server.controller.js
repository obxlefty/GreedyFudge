'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
	album = mongoose.model('album'),
	_ = require('lodash');

/**
 * Create an album
 */
exports.create = function(req, res) {
	var album = new album(req.body);

	album.save(function(err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(album);
		}
	});
};

/**
 * Show the current game
 */
exports.read = function(req, res) {
	res.json(req.album);
};

/**
 * List of albums
 */
exports.list = function(req, res) {
	album.find().sort('-created').populate('artist').exec(function(err, albums) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(albums);
		}
	});
};

/**
 * game middleware
 */
exports.albumByID = function(req, res, next, id) {
	album.findById(id).populate('artist').exec(function(err, game) {
		if (err) return next(err);
		if (!album) return next(new Error('Failed to load album ' + id));
		req.album = album;
		next();
	});
};

