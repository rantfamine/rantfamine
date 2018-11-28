

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
 
server.listen(server_port, server_ip_address, function () {
  console.log( "Listening on " + server_ip_address + ", port " + server_port )
});


const tmi = require('tmi.js'); const fs = require('fs');
let opts = {
  identity: {
    username: "terminafan31", password: "oauth:z96d28fefsqpcp3ko5cglqxx7usxb7"
  },
  channels: [
    "thesegacampgamer22"
  ]
}
function randomint(min, max) {
  if (max == null) {max = min; min = 0}
  min = Math.ceil(min); max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min
}
function r(array, seen) {
  if (seen == undefined) {return array[randomint(array.length-1)]}
}

let testing = 0; if (testing) {opts.channels = [opts.identity.username]}
let MTM = 0; let chatActive = 0; let banned = 0; let timedOut = 0

let start = ["How come", "Hey, how come", "Hm, how come", "Why is it that", "Sega, how come", "twintowercamp, why is it that", "hitlercamp, how come", "smegmacamp, why is it that", "akhmed, please explain why", "akhmed bin ahjad, explain why", "why can't you explain why", "can he give a less stupid explanation on why", "can you name 3 good reasons why", "did you breakup with brian? is that your excuse for why", "did you kill werecamp? is that why", "is the same reason you ragequit summer of rpgs the reason", "can you explain why", "why do you get angry when someone points out how", "smegmacamp, how come", "michael, how come", "tangentcamp how come", "asspiecamp how come", "did you throw another heater at kelly? Is that your excuse for why", "i thought you already got your eviction notice, is that why", "Does the machinima contract force you to do stupid shit? is that why", "moroncamp, why is it that", "concentrationcamp, how come", "whorecamp, why is it that", "michaelcamp, how come", "Dunewormcamp, how come", "did you abuse your manmommy again? is that why", "did you spend all of yesterday watching avgn reruns and that's why it's still a problem how", "did you take an iq test yet or are you still so dumb that", "hey vodcamp, why is it that", "shrankocamp, there's no excuse for why", "dildocamp, is it true that", "nazicamp, why is it that", "Hey Fearscamp, remember that moment when", "dropoutcamp, why is it that", "dickwolfcamp, how come", "toiletcamp, is it true that", "Manmommycamp, how come", "Daipercamp, why is it that", "Peniscamp, how come it's true that", "Why do you think it's the #1 complaint in the segacamp forums that", "hey concentrationcamp, how come", "Hentaicamp, why is it that", "jewcamp, remember that time when", "wankercamp, explain why", "yo lazycamp, get off your ass and explain why", "foodstampcamp, any reason why", "ballsackcamp, is it true? that", "hey diapercamp, explain why", "gaslightcamp, explain why", "liarcamp, can you explain why", "stalincamp, is it true? can you explain why", "incompetentcamp, why is it that", "Dumbcamp, why is it that", "Slowinthemindcamp, can you give 2 reasons whhy", "Yo Bonercamp, explain why"]
let middle = ["you ragequit scribblenauts like DSPGaming", "this stream is so boring", "you go on so many stupid tangents", "you're still contracted to machinima", "you keep playing retarded Zelda games", "you replay pokemon all the damn time", "you're so stupid", "you send random copyright strikes to people on youtube", "you said you didn't ban people but you banned like 30 people this month", /*"fears is still a mod",*/ "you lie to your fans all the time", "you say you're not 50, but don't have any evidence for it", "you unmodded everyone", "you hate narutofanluv so much", "you hate your own man mom", "you banned people for posting spaceships", "you permabanned me and lied to all of your viewers that i was timed out", /*"you kiss fears's ass so much",*/ "you ragequit layton because your own handwriting is kindergarten dogshit", "you ripped the contract that geoff made for you", "you hate machinima now", "you called quentin an asshole", "you like going on fears streams", "you can't get a girlfriend", "you did 9/11", "you caused the towers to crash", "you viewbotted sunrose", "you killed that girl on the news", "you never bring kelly on anymore", "you raged at the mockingbird", "you go on dumbass tangents", /*"fears still streams on sundays", */"you use your 'friend' darth for content", "segatalks is more like segatangents these days", "segatalks is so shit", "you never have guests on segatalks", "this is another vod", "you keep using vodcasts", "your stream layout sucks so much", "i sometimes see a red balloon on the top left", "you wore your mom's bra", "you still host rasher", "you never appreciate your fans", "you rage at your fans", "you think you're not 50", "you caused the boston bombing", "you blame being colorblind on brain age", "your brain age is always around 50", "you have a p0rnhub account", "you say you don't live in miIton", /*"fears is still a mod even though he banned everyone",*/ "you keep ragequitting thursdays", "you have a stupid sleep schedule", "you hate your fans", "you never listen to your fans", "you fall asleep so often", "you have to take 2 hour nappy breaks", "the stream is muted", "it's been showing a black screen for like 10 minutes now", "you deny eating blue buffalo", "you make fake threats about closing the stream all the time", "it says \"VODCAST\" at the top right of your stream", "you asskiss fears", "you suck so much cock at games you have to play baby games like pokemon and zelda", "this is on your official page: https://www.pornhub.com/photo/332167762 ", "you have this linked on your youtube: is.gd/segacampyoutube", "you always say you'll be dirty at the end of the year", "you ban people like shranko for just posting spaceships, even though fears paid shranko to do it", "yakov called you the king of ass pies", "you spend like 10 years playing pokemon and still never finish it", "you had to tell joey to keep his wiener in his pants", "you keep banning longtime fans", "you keep stealing quotes from AVGN", "you keep regurgitating opinions from some guy called johnny", "you lick fears's asshole", "you stalk ferret on twitter", "you won't give a proper shoutout to eyecost 9a levin", "you caused 9/11 again???", "you did the boston bombing", "you call yourself a musician but you can play less instruments than dragon", "you keep canceling streams", "you have no talent whatsoever", "you make segatangents 500% worse", "you hate shranko so much", "you hate geoff now", "you played scribblenauts worse than darksydephil", "you spent the last 4 years playing pokemon", "you wasted an entire season playing nothing but pokemon", "you hate the gay community", "you hate trans people", "you hate the latino community", "you keep ignoring my questions", "you keep ignoring chat and lying about it", "you deepthroated your good buddy brandon", "you deny pixel being your father", "you deny eevee being your mother", "you hate your dad pixel now", "you think you're 20 years younger", "you never finished and ragequit all the games in both summer of rpgs and fall of puzzle games", "you ragequit layton on the name screen", "you now hate narutofanluv", "you got kicked in the balls", "you destroyed the cheezit twin towers", "you ignore chat for 10 minutes to go on moroncamp tangents", "the stream reveals you are using a RERUN", "this is a prerecorded video", "you play baby games like pokemon", "you act like chris chandler a lot"]
let end = ["", "", "", "", "", "", "No retarded complaining please", "be more intelligent ffs", "plz", "FailFish", ":/", "just wondering :)", "Let's just chill :)", "you're better than this", "you're better than that", "I thought you'd have higher standards", "what's with the dspcamp lately?", "sorry your relationship with brian isn't working out btw", ":(", "take an iq test btw", "I'm not trolling, I'm serious", "LUL", "LUL LUL", ":/ :)", "lol", "seriously", "if you don't answer its a vod", "#GiveUpSegacamp22", "SegaHypocrite", "could you blame me?", "#LiarCamp", "i'd rather watch twitch.tv/darksydephil tbh", "twitch.tv/darksydephil", "#segatangents", "I'm a longtime fan, sad you've come so low", "I used to watch you all the time man, why's the quality dropped so much?", "senilecamp", "and again the screen's still black", "just curious", "wanted to ask this for a long time", "this question is the top question asked in the segacamp forums right now", "-the mockingbird", "-The Mockingbird", "#ChimAeraOut", "#DontGiveUpFearscamp26", "#DontGiveUpTangentcamp26", "KevinTurtle", "BrokeBack", "BabyRage", "from your good buddy Terminafan", "DontGiveUpFemcamp26", "#DontRagequitUmmuhh", "#NoMorePokemonYellow", "#BoycottPokemonYellow", "frorm your goodummuh buddy terminafan.", "maybe you would grow as a person if you took people's advice", "I guess 50 year old brains are just not malleable now", "Lets just watch DSP"]

let chimaeravideos = ["https://www.youtube.com/watch?v=wMkt5YAHAnM", "https://www.youtube.com/watch?v=sbMQVCPFngE", "https://www.youtube.com/watch?v=rIiKfllPo2c", "https://www.youtube.com/watch?v=C5swl7JZOCk", "https://www.youtube.com/watch?v=hiGkkC5Gw8Y", "https://www.youtube.com/watch?v=7Wm3FrdJO1U", "https://www.youtube.com/watch?v=aPiEaqZ4Jj4", "https://www.youtube.com/watch?v=ERRCbfZdseg", "https://www.youtube.com/watch?v=F1WknC8m9k8", "https://www.youtube.com/watch?v=1aJ5IDBjJXQ", "https://www.youtube.com/watch?v=e_I7djbmnig", "https://www.youtube.com/watch?v=_e4QrvnDltE", "https://www.youtube.com/watch?v=B4bS5P61E6M", "https://www.youtube.com/watch?v=bOtL1aDR1Wk"]


let terminasSent = 0
function termina (target, context, params) {
    let message = ""
    terminasSent += 1
    switch (terminasSent) {
      case 4: message = r(end); break
      case 7: message = ("btw, what is this? " + r(chimaeravideos)); terminasSent = 0; break
      default: message = (r(start) + " " + r(middle) + "? " + r(end))
    }
    send(message)
    console.log("CALI! " + terminasSent + ": " + message)
}

let segacampNotInChat = 1
setInterval(function(){

  client.api({
    url: "https://tmi.twitch.tv/group/user/thesegacampgamer22/chatters"
  }, function(err, res, body) {
    if (body.chatters.moderators.includes("thesegacampgamer22")) {segacampNotInChat = 0}
    else {segacampNotInChat = 1}
    //console.log(body.chatters); console.log(segacampNotInChat)
  });
  if (segacampNotInChat) {console.log("Segacamp's not even here, skipped"); return}
  if (banned) {console.log("Banned, wtf"); return}
  if (timedOut) {console.log("Timed out, wtf"); return}
  if (MTM < 2 && chatActive) {termina("thesegacampgamer22", "say", "")} else {console.log("CALI attempted, skipped because MTM is " + MTM)}
  MTM = 0

}, 60000 * 1.1);
function send (message) {
  if (randomint(0, 5) < 1) {message = message.substring(0, 1).toLowerCase() + message.substring(1)} else {message = message.substring(0, 1).toUpperCase() + message.substring(1)} // Chance to uncapitalize first word
  //if (randomint(0, 5) == 1) {message = message.substring(0, (message.length)-1)} // Chance to remove period
  if (randomint(0, 5) == 1) {message = message.toLowerCase()} // Chance the whole thing is lowercase
  if (randomint(0, 5) == 1) {message = message.replace("?", "")} // % we remove the question mark
  //if (randomint(0, 15) == 1) {message = message.toUpperCase()} // Chance it's uppercase
  client.say(opts.channels[0], message)
}

let client = new tmi.client(opts)

client.on('message', onMessageHandler)
client.on('connected', onConnectedHandler)
client.on('disconnected', onDisconnectedHandler)
client.on('notice', onErrorHandler)

client.connect()

client.api({
    url: "https://tmi.twitch.tv/group/user/thesegacampgamer22/chatters"
}, function(err, res, body) {
    console.log(body);
});

let terminaMentioned = [":)", "I umma had to, okay", ":/"]
let notMentionedThisSession = 1
function onMessageHandler (target, context, msg, self) {
  let user = `${context.username}`.toLowerCase()
  if (user != "r0b0_c4mp" && user != "terminafan31") {MTM += 1}
  if (msg.match(/(termina)/i) && notMentionedThisSession) {
    notMentionedThisSession = 0
    setTimeout(function(){send(r(terminaMentioned))}, 60000 * 0.2);
  }
  chatActive = 1
}

function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`)
  console.log("The message possibilities are endless! " + start.length + " * " + middle.length + " * " + end.length + " = " + (start.length * middle.length * end.length))
  termina("thesegacampgamer22", "say", "")
}

function onDisconnectedHandler (reason) {
  console.log(`Womp womp, disconnected: ${reason}`)
  process.exit(1)
}

function onErrorHandler (channel, msgid, message) {console.log(`Error: ${message}`);
if (`${message}`.includes("permanent")) {banned = 1} } // For Twitch system messages.