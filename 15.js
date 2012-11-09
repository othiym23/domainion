'use strict';

var domain = require('domain');
var util = require('util');

var d = domain.create();
d.on('error', function (error) {
  console.error("Got error: %s", error);
  console.error("error.domain: %s", util.inspect(error.domain));
});

var object;
var handle = setInterval(function () {
  console.error("value of object.field: %s", object.field);
}, 500);

d.add(handle);
