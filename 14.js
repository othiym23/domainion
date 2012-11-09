'use strict';

var http   = require('http')
  , domain = require('domain')
  ;

var handlerDomain = domain.create();

var server = http.createServer(function (req, res) {
  handlerDomain.once('error', function (error) {
    console.error('Oh no, request handler for URL %s got error: %s',
                  req.url,
                  error);
    res.statusCode = 500;
    res.end();
  });

  var handle = setTimeout(function () {
    res.send("<html><head><title>page</title><body>yo dawg I heard u like HTML</body></html>");
  }, 200);
  handlerDomain.add(handle);
});

server.listen(8080);
