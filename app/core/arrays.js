exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  removeWithoutCopy : function(arr, item) {
    for (var i = 0; i < arr.length; i++){
      if (arr[i] === item){arr.splice(i, 2)};
    };
    return arr
  },

  append : function(arr, item) {
    arr.push(item)
    return arr
  },

  truncate : function(arr) {
    arr.pop()
    return arr
  },

  prepend : function(arr, item) {
    arr.unshift(item)
    return arr
  },

  curtail : function(arr) {
    arr.shift()
    return arr
  },

  concat : function(arr1, arr2) {
    var arr = arr1.concat(arr2)
    return arr
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item)
    return arr
  },

  count : function(arr, item) {
    var count = 0
    for (var i = 0; i < arr.length; i++){
      if (arr[i] === item){count++};
    };
    return count
  },

  duplicates : function(arr) {
    var dup_arr = []
    for (var i = 0; i < arr.length; i++){
      if (arr.includes(arr[i], i + 1)
      && !dup_arr.includes(arr[i])){
        dup_arr.push(arr[i])
      };
    };
    return dup_arr
  },

  square : function(arr) {
    squ_arr = []
    for (var i = 0; i < arr.length; i++){
      squ_arr.push(arr[i] * arr[i])
    };
    return squ_arr
  },

  findAllOccurrences : function(arr, target) {
    var dup_index = []
    for (var i = 0; i < arr.length; i++){
      if (arr[i] === target){
        dup_index.push(i)
      };
    };
    return dup_index
  }
};
