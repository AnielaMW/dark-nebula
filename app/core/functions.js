exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  isPrime : function(num) {
    if (num % 2 === 0){return false}
    else if (num % 3 === 0){return false}
    else {return true}
  },

  arraySum : function(array) {
    var answer = 0
    array.map (function (num) {answer += num})
    return answer;
  },

  fizzBuzz : function(num) {
    // write a function that receives a number as its argument;
    if (num % 3 === 0 && num % 5 === 0){return "fizzbuzz"}
    // if the number is divisible by 3 and 5, the function should return
    // 'fizzbuzz';
    else if (num % 3 === 0){return "fizz"}
    // if the number is divisible by 3, the function should return 'fizz';
    else if ((num % 5) === 0){return "buzz"}
    // if the number is divisible by 5, the function should return 'buzz';
    else if (typeof num === 'number' ){return num}
    else {return false};
    // otherwise the function should return the number, or false if no number
    // was provided or the value provided is not a number
  }
};
