const palindromes = function (string = "") {
  // const forward = string.slice().replaceAll(' ', '').replaceAll(',', '').replaceAll('!', '').replaceAll('?', '').replaceAll('.', '').toLowerCase()
  const alphanum = 'abcdefghijklmnopqrstuvwxyz0123456789'
  const forward = string
  .toLowerCase()
  .split('')
  .filter((array) => alphanum.includes(array)).join('')
  const backward = forward.split('').reverse().join('')
  return forward === backward
};

palindromes()

// Do not edit below this line
module.exports = palindromes;
