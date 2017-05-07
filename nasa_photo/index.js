var Twit = require('twit');
var request = require('request');
var fs = require('fs');

var bot = new Twit({
	consumer_key: process.env.LEARNINGBOT_CONSUMER_KEY,
	consumer_secret: process.env.LEARNINGBOT_CONSUMER_SECRET,
	access_token: process.env.LEARNINGBOT_ACCESS_TOKEN,
	access_token_secret: process.env.LEARNINGBOT_ACCESS_TOKEN_SECRET,
	timeout_ms: 60*1000
});