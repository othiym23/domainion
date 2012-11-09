'use strict';

var http = require('http');

var server = http.createServer(function (req, res) {
  res.send("<html><head><title>page</title><body>yo dawg I heard u like HTML</body></html>");
});

server.listen(8080);
