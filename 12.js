'use strict';

var request = require('request')
  , domain  = require('domain')
  ;

var rd = domain.create();
rd.on('error', function (error) {
  console.log("error fetching data: %s", error);
});

request('http://example.cob/', rd.intercept(function (response, body) {
  console.error("body: %s", body);
}));
