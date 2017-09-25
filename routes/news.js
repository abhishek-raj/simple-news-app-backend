var express = require('express');
var config = require('../config');
var request = require('request');
var router = express.Router();

var BASE_URL = config.BASE_URL;
var API_KEY = config.API_KEY;

router.get('/sources', function(req, res, next) {
	request({
		url: BASE_URL + '/sources',
		qs: req.query
	}).pipe(res);
});

router.get('/articles', function(req, res, next) {
	request({
		url: BASE_URL + '/articles?apiKey=' + API_KEY,
		qs: req.query
	}).pipe(res);
});

module.exports = router;
