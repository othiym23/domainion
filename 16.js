'use strict';

var object;
var handle = setInterval(function () {
  console.error("value of object.field: %s", object.field);
}, 500);
