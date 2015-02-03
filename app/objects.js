if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
       return fn.apply(obj);
    },

    alterObjects : function(constructor, greeting) {
        return constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
        var arr = [];
        for (prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                arr.push(prop+': '+obj[prop]);
            }
        }
        return arr;
    }
  };
});
