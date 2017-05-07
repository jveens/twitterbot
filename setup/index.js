var Twit = require('twit');

var bot = new Twit({
	consumer_key: process.end.LEARNINGBOT_CONSUMER_KEY,
	consumer_secret: process.end.LEARNINGBOT_CONSUMER_SECRET,
	access_token: process.end.LEARNINGBOT_ACCESS_TOKEN,
	access_token_secret: process.end.LEARNINGBOT_ACCESS_TOKEN_SECRET,
	timeout_ms: 60*1000
});