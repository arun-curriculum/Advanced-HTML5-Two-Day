var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(socket) {
	socket.on('chat', function(chatInfo) {
		socket.broadcast.emit('chat', chatInfo);
	});
});

app.get("/", function(req, res) {
	res.send("Welcome to the Node chat server!");
});

var port = process.env.PORT || 3000;

http.listen(port);