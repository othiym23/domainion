'use strict';

process.on('uncaughtException', function (error) {
  console.error("got an error, no idea where it came from: %s", error.stack);
});

var http = require('http');

var server = http.createServer(function (req, res) {
  res.send("<html><head><title>page</title><body>yo dawg I heard u like HTML</body></html>");
});

server.listen(8080);
