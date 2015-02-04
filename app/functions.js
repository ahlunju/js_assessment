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
        // return arr.map(fn);
    },

    partial : function(fn, str1, str2) {
        // return fn(x) {
        //     return str1 + ', ' + str2 + x;
        // }
    },

    useArguments : function() {

    },

    callIt : function(fn) {
        // return fn.call(this, arguments+1);
    },

    partialUsingArguments : function(fn) {

    },

    curryIt : function(fn) {

    }
  };
});
