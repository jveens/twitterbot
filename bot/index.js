var Twit = require('twit');

var bot = new Twit({
	consumer_key: process.env.LEARNINGBOT_CONSUMER_KEY,
	consumer_secret: process.env.LEARNINGBOT_CONSUMER_SECRET,
	access_token: process.env.LEARNINGBOT_ACCESS_TOKEN,
	access_token_secret: process.env.LEARNINGBOT_ACCESS_TOKEN_SECRET,
	timeout_ms: 60*1000
});

// // Update a status
// bot.post('/statuses/update', 
// 	{
// 		status: 'hello world!'
// 	}, function(err, data, response){
// 		if (err) {
// 			console.log(err);
// 		} else {
// 			console.log(data.text + ' was tweeted');
// 		}
// 	}
// );

// // Get Followers
// // can also get from 'followers/ids'
// bot.get('followers/list',
// 	{
// 		screen_name: 'bots_jenny'
// 	}, function(err, data, response){
// 		if (err) {
// 			console.log(err);
// 		} else {

// 			data.users.forEach(function(user){
// 				console.log(user.screen_name);
// 			});

// 		}
// 	}
// );

// // Follow a user
// bot.post('friendships/create',
// 	{
// 		screen_name: 'jennyveens'
// 	},
// 	function(err, data, response){
// 		if (err) {
// 			console.log(err);
// 		} else {
// 			console.log(data);
// 		}
// 	}
// );

// Get list of those we are following
// bot.get('friends/list',
// 	{
// 		screen_name: 'bots_jenny'
// 	}, 
// 	function(err, data, response){
// 		if(err) {
// 			console.log(err);
// 		} else {
// 			console.log(data);
// 		}
// 	}
// );

// // Check friendship type
// bot.get('friendships/lookup',
// 	{
// 		screen_name: 'jennyveens'
// 	}, 
// 	function(err, data, response){
// 		if(err) {
// 			console.log(err);
// 		} else {
// 			console.log(data);
// 		}
// 	}
// );

// // send a DM
// bot.post('direct_messages/new',
// 	{
// 		screen_name: 'jennyveens',
// 		text: 'Hey There JV'
// 	},
// 	function(err, data, response){
// 		if (err) {
// 			console.log(err);
// 		} else {
// 			console.log(data);
// 		}
// 	}
// );

// // get home timeline
function getBotTimeline() {
	bot.get('statuses/home_timeline',
		{
			count: 5
		},
		function(err, data, response) {
			if (err) {
				console.log(err);
			} else {

				data.forEach(function(d){
					console.log(d.text);
					console.log(d.user.screen_name);
					console.log(d.id_str)
					console.log('\n');
				});
				// console.log(data);
			}
		}
	);
}

// bot.post('statuses/retweet/:id',
// 	{
// 		id: string
// 	},
// 	function(err, data, response){
// 		if (err) {
// 			console.log(err);
// 		} else {
// 			console.log(response);
// 		}
// 	}
// );

// bot.post('statuses/unretweet/:id',
// 	{
// 		id: string
// 	},
// 	function(err, data, response){
// 		if (err) {
// 			console.log(err);
// 		} else {
// 			console.log(response);
// 		}
// 	}
// );