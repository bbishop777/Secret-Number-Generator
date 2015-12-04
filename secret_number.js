  'use strict';
module.exports = function() {
  var a = (Math.random() * 1000000) + 1;
    if (a >=1000000) {
      a = 1000000;
    }
      return function () {
        return a;
      };
};

