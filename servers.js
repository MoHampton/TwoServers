var http = require('http');

var PORTONE = 7000;

var server = http.createServer(function(request,response){
  response.end("You're not bad looking...glad you came here");
});

server.listen(PORT, function () {
  console.log('server listening on: http://localhost:' + PORT);
})

var http = require('http');

var PORTTWO = 7500;

var serverOne = http.createServer(function(request,response){
  response.end("You need some time to self-reflect...just leave.");
});

server.listen(PORT, function () {
  console.log('server listening on: http://localhost:' + PORT);
})