'use strict';

var request = require('request');

request('http://example.cob/', function (error, response, body) {
  if (error) return console.error("error fetching data: %s", error);

  console.error("body: %s", body);
});
