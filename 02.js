'use strict';

var object;
try {
  console.log(object.field);
}
catch (error) {
  console.error("got an error: %s", error);
}
