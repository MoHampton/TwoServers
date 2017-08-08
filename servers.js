var http = require('http');

var PORT = 7000;

var server = http.createServer(function(request,response){
  response.end("You're not bad looking...glad you came here");
});

server.listen(PORT, function () {
  console.log('server listening on: http://localhost:' + PORT);
})

var http = require('http');

var PORT = 7500;

var server = http.createServer(function(request,response){
  response.end("You need some time to self-reflect...just leave.");
});

server.listen(PORT, function () {
  console.log('server listening on: http://localhost:' + PORT);
})