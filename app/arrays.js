if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        return arr.reduce( function (prev, cur) {
            return prev + cur;
        });
    },

    remove : function(arr, item) {
        return arr.splice(arr.indexOf(item), 1);
    },

    removeWithoutCopy : function(arr, item) {

    },

    append : function(arr, item) {
        return arr.push(item);
    },

    truncate : function(arr) {

    },

    prepend : function(arr, item) {

    },

    curtail : function(arr) {

    },

    concat : function(arr1, arr2) {

    },

    insert : function(arr, item, index) {
        return arr.splice(index, 0, item);
    },

    count : function(arr, item) {
        var count = 0;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                count += 1;
            }
        }
        return count;
    },

    duplicates : function(arr) {
        
    },

    square : function(arr) {
        return arr.map(function(el) {
            return el * el;
        });
    },

    findAllOccurrences : function(arr, target) {

    }
  };
});
