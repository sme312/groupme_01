var HTTPS = require('https');

var botID = process.env.BOT_ID;

var lyrics = "have you ever wondered what life is about"

function respond() {
var request = JSON.parse(this.req.chunks[0]),
botTrigger = /(.|)*hey now/;
  
if(request.text && botTrigger.test(request.text)) {
this.res.writeHead(200);
postMessage(lyrics);
this.res.end();
}

else {
console.log("Nothing happened");
this.res.writeHead(200);
this.res.end();
}
}



function postMessage(response) {
var botResponse,options, body, botReq;

botResponse = response

options = {
hostname: 'api.groupme.com',
path: '/v3/bots/post',
method: 'POST'
};

body = {
"bot_id" : botID,
"text" : botResponse
};

console.log('sending ' + botResponse + ' to ' + botID);

botReq = HTTPS.request(options, function(res) {
if(res.statusCode == 202) {
//neat
} else {
console.log('rejecting bad status code ' + res.statusCode);
}
});

botReq.on('error', function(err) {
console.log('error posting message '  + JSON.stringify(err));
});
botReq.on('timeout', function(err) {
console.log('timeout posting message '  + JSON.stringify(err));
});
botReq.end(JSON.stringify(body));
}

function getRandomInt(min, max) {
return Math.floor(Math.random() * (max - min)) + min;
}

exports.respond = respond;
