'use strict';

var http   = require('http')
  , domain = require('domain')
  ;

function handleInDomain(req, res, callback) {
  var handlerDomain = domain.create();
  handlerDomain.on('error', function (error) {
    console.error('Oh no, request handler for URL %s got error: %s',
                  req.url,
                  error);
    res.statusCode = 500;
    res.end();
  });
  handlerDomain.run(callback);
}

var server = http.createServer(function (req, res) {
  handleInDomain(req, res, function () {
    setTimeout(function () {
      res.send("<html><head><title>page</title><body>yo dawg I heard u like HTML</body></html>");
    }, 200);
  });
});

server.listen(8080);
