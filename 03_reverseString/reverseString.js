const reverseString = function(string) {
  let reverseString = []
  for (char of string) {
    reverseString.unshift(char)
  }
  return reverseString.join('')
};

// Do not edit below this line
module.exports = reverseString;
