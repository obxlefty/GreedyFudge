'use strict';

var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
	Album = mongoose.model('Album'),
	_ = require('lodash');
	
var count = 1; 		

Album.find().exec(function(err, albums){
	console.log(albums.length);
	count = albums.length;
});
	
/**
 * Module dependencies.
 */
exports.index = function(req, res) {
	res.render('index', {
		user: req.user || null,
		request: req
	});
};

exports.getQuestion = function(req, res) {
	
	var question = {};

	// function to get a random artist
	var getRandomArtist = function( callback ){

		var rand = Math.floor(Math.random() * count);
		console.log('rand=' + rand);
	    Album.findOne().skip(rand).exec(function(err, album) {
			if (err) {
				return 'Error ' + err;
			} else {
				callback( album.artist );
			}
		});

	};

	var rand = Math.floor(Math.random() * count);
	console.log(rand);
    Album.findOne().skip(rand).exec(function(err, album) {
    	
    	var jsonResponse = {};
    	console.log(album);
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			
			var rand = Math.floor(Math.random() * 5);

			jsonResponse.albumTitle = album.title;
			jsonResponse.possibleAnswers = [];

		    Album.find().skip(rand).limit(4).exec(function(err, albums) {
				if (err) {
					return 'Error ' + err;
				} else {
					for (var i = 0; i < 5; i++){
						if (i === rand){
							jsonResponse.possibleAnswers[i] = {'artist':album.artist, 'correct':true};
						}else{
							jsonResponse.possibleAnswers[i] = {'artist':albums.shift().artist, 'correct':false};
						}
					}
					
					res.json(jsonResponse);
				}
			});
			
		
			
		}
	});
};
