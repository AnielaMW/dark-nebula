exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    return /\d/.test(str)
  },

  containsRepeatingLetter : function(str) {
    return /(\D)\1/.test(str)
  },

  endsWithVowel : function(str) {
    return /[aeiou]$/i.test(str)
  },

  captureThreeNumbers : function(str) {
    if (/\d{3}/.test(str) === true){
      return str.match(/\d{3}/)[0]}
    else {return false};
  },

  matchesPattern : function(str) {
    return /^\d{3}-\d{3}-\d{4}\b/.test(str)
  },

  isUSD : function(str) {
    return /^\$\d+((\,\d{3})|)((\,\d{3})|)((\.\d{2})|(\,\d{3}))$/.test(str)
  }
};
