exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var arr = str.split('')
    var counter = 1
    var new_array = []
    for (var i = 0; i < arr.length; i++){
      if(arr[i] === arr[i + 1]){
        counter += 1
      }
      else if (arr[i] !== arr[i + 1] && counter === 0){
        new_array.push(arr[i])
        counter = 1
      }
      else {
        counter = 1
      };
      if (counter <= amount){
        new_array.push(arr[i])
      }
    };
    return new_array.join('')
  },

  reverseString: function(str) {
    return str.split('').reverse().join('');
  }
};
