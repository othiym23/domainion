'use strict';

var object;
try {
  process.nextTick(function () {
    console.log(object.field);
  });
}
catch (error) {
  console.error("got an error: %s", error);
}
