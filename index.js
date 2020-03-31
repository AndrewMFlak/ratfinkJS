// Create a new Express application
// var app = require('express')();

// Create an http server with Node's HTTP module. 
// Pass it the Express application, and listen on port 8080. 
// var server = require('http').createServer(app).listen(8080);

// Instantiate Socket.IO hand have it listen on the Express/HTTP server
// var io = require('socket.io').listen(server);

// io.sockets.on('connection', function (socket) {
    //console.log('client connected');
//     agx.initGame(io, socket);
// });
//example event listener below
// gameSocket.on('hostCreateNewGame', hostCreateNewGame);

var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});