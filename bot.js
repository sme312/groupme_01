// var HTTPS = require('https');

// var botID = process.env.BOT_ID;

// var attack_yours = 70;
// var defense_yours = 55;
// var accuracy_yours = 45;
// var evasiveness_yours = 40;
// var speed_yours = 40;
// var hp_yours = 50;
// var attack_enemy = 55;
// var defense_enemy = 55;
// var accuracy_enemy = 70;
// var evasiveness_enemy = 55;
// var speed_enemy = 35;
// var hp_enemy = 50;
// var accuracy_check = 0;
// var combat_check = false;
// var go_into_combat = true;
// var combat = false;

// function respond() {
//   var request = JSON.parse(this.req.chunks[0]),
//       botname = /(.|)*asdf/;
//       botsave = /\bsave\b/;
//       botcombat = /combat/;
// }
 
//  if(request.text && botname.test(request.text)) {
//     postMessage("test");
//     this.res.end();
//   }
//   else if(request.text && botsave.test(request.text)) {
//     saveProgress();
//     this.res.end();
//   }
//    else if(request.text && botcombat.test(request.text)) {
//     combat = true;
//     this.res.end();
//   }

// while(combat){
// if (combat_check === false && go_into_combat === true) {
// combatYou();
// combatEnemy();
// }
// else if (combat_check === true && hp_yours > 0 && hp_enemy > 0) {
// combatYou();
// combatEnemy();
// }
// else if (combat_check === true && hp_yours > 0 && hp_enemy <= 0) {
// postMessage("You won GG EZ \n");
// combat_check = false;
// go_into_combat = false;
// combat = false;
// }
// else if (combat_check === true && hp_yours <= 0 && hp_enemy > 0) {
// postMessage("Your opponent won GG NO REEEEEEEEEEEEEEEEEEEEEE \n");
// combat_check = false;
// go_into_combat = false;
// combat = false;
// }
// else if (combat_check === true && hp_yours <=0 && hp_enemy <= 0) {
// postMessage("You both killed each other RIPIPIP \n");
// combat_check = false;
// go_into_combat = false;
// combat = false;

// }
// else if (combat_check === false && go_into_combat === false) {
// postMessage("Your are not in combat \n");
// }

  
// function combatYou(){
// combat_check = true;
// accuracy_check = (Math.floor(Math.random()* (100 - 0)) + 0);
// if (accuracy_check <= accuracy_yours) {
// hp_enemy = hp_enemy - (attack_yours*defense_enemy*.01);
// //hp_enemy_string = Integer.toString(hp_enemy);
// //window.alert("Your attack hit, your enemy's health is " + hp_enemy_string +"\n");
// postMessage("Your attack hit, your enemy's health is " + hp_enemy +"\n");
// }
// else if (accuracy_check > accuracy_yours) {
// //window.alert("Your attack did not hit \n");
// postMessage("Your attack did not hit \n");
// }
// }
  
//  function combatEnemy(){
// accuracy_check = (Math.floor(Math.random()* (100 - 0)) + 0);
// if (accuracy_check <= accuracy_enemy) {
// hp_yours = hp_yours - (attack_enemy*defense_yours*.01);
// //hp_yours_string = Integer.toString(hp_yours);
// //window.alert("Your enemy's attack hit, your health is " + hp_yours_string + "\n");
// postMessage("Your enemy's attack hit, your health is " + hp_yours + "\n");
// }
// else if (accuracy_check > accuracy_enemy) {
// //window.alert("Your enemy's attack did not hit \n");
// postMessage("Your enemy's attack did not hit \n");
// }
// }
// }
 

// function postMessage(response) {
//   var botResponse,options, body, botReq;

//   botResponse = response

//   options = {
//     hostname: 'api.groupme.com',
//     path: '/v3/bots/post',
//     method: 'POST'
//   };

//   body = {
//     "bot_id" : botID,
//     "text" : botResponse
//   };

//   console.log('sending ' + botResponse + ' to ' + botID);

//   botReq = HTTPS.request(options, function(res) {
//       if(res.statusCode == 202) {
//         //neat
//       } else {
//         console.log('rejecting bad status code ' + res.statusCode);
//       }
//   });

//   botReq.on('error', function(err) {
//     console.log('error posting message '  + JSON.stringify(err));
//   });
//   botReq.on('timeout', function(err) {
//     console.log('timeout posting message '  + JSON.stringify(err));
//   });
//   botReq.end(JSON.stringify(body));
// }

// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }


// exports.respond = respond;

var HTTPS = require('https');

var botID = process.env.BOT_ID;

var attack = 20;
var defense = 30;
var evasiveness = 55;
var accuracy = 51;
var hp = 99;
var speed = 61;
var checkpoint = 1;
var races = ["Human", "Android", "Glorgok", "Ikatrians", "Zolts"];
var chosenClasses = ["Warrior", "Rogue", "Ranger", "Berzerker", "Xenomancer"];
//var race = "Android";
//var charClass = "Rogue";

function respond() {
var request = JSON.parse(this.req.chunks[0]),
botRegexKya = /(.|)*lol/;
botsave = /(.|)*\bsave\b/;
botsavecode = /(.|)*\breenter\b/;

var waifuPhrases = [ "https://pbs.twimg.com/media/B8YdqjxIQAAU87L.jpg", "It's not like I l-like you or anything...", 
"B-B-baka!", "My senpai is the best!", "But isn't that... lewd?", "Kemy-kun is sugoi, but not as sugoi as senpai!", "Noooo!",
"http://i0.kym-cdn.com/photos/images/facebook/000/240/558/d76.jpg", "http://2.bp.blogspot.com/-6hX2FngcmZk/U1VlHs5CfNI/AAAAAAAAQNI/yxSWLiV-z94/s1600/waifu.png"]

if(request.text && botRegexKya.test(request.text)) {
this.res.writeHead(200);
postMessage(waifuPhrases[getRandomInt(0,waifuPhrases.length)]);
this.res.end();
}
else if(request.text && botsave.test(request.text)) {
saveProgress();
this.res.end();
}
else if(request.text && botsavecode.test(request.text)) {
var inputString = request.text;
var canDecode = inputString.replace(/^(reenter)/,"");
decode(canDecode);
this.res.end();
}
else {
console.log("Nothing happened");
this.res.writeHead(200);
this.res.end();
}
}



function saveProgress() {
var savecode = 0;
var race = "Human";
switch(race){
case "Human":
savecode = savecode + 100000000000000; 
break;
case "Android":
savecode = savecode + 200000000000000;
break;
case "Glorgok":
savecode = savecode + 300000000000000;
break;
case "Ikatrians":
savecode = savecode + 400000000000000;
break;
case "Zolts":
savecode = savecode + 500000000000000;
break;
}
var charClass = "Warrior";
switch(charClass){
case "Warrior":
savecode = savecode + 10000000000000;
break;
case "Rogue":
savecode = savecode + 20000000000000;
break;
case "Ranger":
savecode = savecode + 30000000000000;
break;
case "Berzerker":
savecode = savecode + 40000000000000;
break;
case "Xenomancer":
savecode = savecode + 50000000000000;
break;
}
savecode = savecode + attack * 100000000000;
savecode = savecode + defense * 1000000000;
savecode = savecode + evasiveness * 10000000;
savecode = savecode + accuracy * 100000;
savecode = savecode + hp * 1000;
savecode = savecode + speed *10;
savecode = savecode + checkpoint;
encode(savecode);
}

function encode(saveCode){
var digitArray = [];
for(i = 0; i < 15; i++){
digitArray[i] = saveCode % 10;
saveCode = saveCode - digitArray[i];
saveCode = saveCode / 10;
}
var charArray = [];
for(i = 0; i < 15; i++){
charArray[i] = String.fromCharCode(97 + digitArray[i]);
}
var charSaveCode = '';
for (i = 0; i < 15; i++){
charSaveCode = charSaveCode + charArray[i];
}
postMessage("Your saved game code is: " + charSaveCode.toString());

}

function decode(saveCode){
var digitArray = [];
for(i = 0; i < 15; i++){
digitArray[14-i] = saveCode[i].charCodeAt() - 97;
}
characterRace = races[digitArray[0]-1];
characterClass = chosenClasses[digitArray[1]-1];
attack = digitArray[3] + digitArray[2] * 10;
defense = digitArray[5] + digitArray[4] * 10;
evasiveness = digitArray[7] + digitArray[6] * 10;
accuracy = digitArray[9] + digitArray[8] * 10;
hp = digitArray[11] + digitArray[10] * 10;
speed = digitArray[13] + digitArray[12] * 10;
checkpoint = digitArray[14];
postMessage("Your attack is: "  + evasiveness);

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
