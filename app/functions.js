if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn.apply(this,arr);
    },

    speak : function(fn, obj) {
        return fn.call(obj);
    },

    functionFunction : function(str) {
        return function(str2) {
            return str + ', ' + str2;
        }
    },

    makeClosures : function(arr, fn) {
        // var result = [];
        // for (var i = 0; i < arr.length; i++) {
        //     result.push(fn(arr[i]));
        // }
        // return result;
    },

    partial : function(fn, str1, str2) {
        var args = Array.prototype.slice.call(arguments, 1);
        return function() {
            return fn.apply(null, args.concat(Array.prototype.slice.call(arguments, 0)));
        };
    },

    useArguments : function() {
        return Array.prototype.reduce.call(arguments, function(prev, curr) {
            return prev + curr;
        });
    },

    callIt : function(fn) {
        return fn.apply(null, Array.prototype.slice.call(arguments, 1));
    },

    partialUsingArguments : function(fn) {
        var args = Array.prototype.slice.call(arguments, 1);
        return function() {
            return fn.apply(null, args.concat(Array.prototype.slice.call(arguments, 0)));
        };
    },

    curryIt : function(fn) {
        
    }
  };
});
