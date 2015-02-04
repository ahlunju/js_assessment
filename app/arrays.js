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
        
    },

    removeWithoutCopy : function(arr, item) {
        for (i = 0, len = arr.length; i < len; i++) {
            if (arr[i] === item) {
              arr.splice(i, 1);
              i = i - 1;
              len = len - 1;
            }
        }
        // arr.splice(arr.indexOf(item), 1);
        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    prepend : function(arr, item) {
        return [item].concat(arr);
        // return arr.unshift(item); doesn't pass the test
    },

    curtail : function(arr) {
        arr.shift();
        return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
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
        var dup = [];
        for (var i = 0; i < arr.length; i++){
            for (var j = i + 1; j <arr.length; j++) {
                if (arr[i] === arr[j] && dup.indexOf(arr[i]) === -1) {
                    dup.push(arr[i]);
                }
            }
        }
        return dup;
    },

    square : function(arr) {
        return arr.map(function(i) {
            return i * i;
        });
    },

    findAllOccurrences : function(arr, target) {
        var occurence = [];

        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === target) {
                occurence.push(i);
            }
        }
        return occurence;
    }
  };
});
