const fibonacci = function(n = 1) {
  let fibonacci = 0
  if (n < 0) {fibonacci = "OOPS"}
  let first = 0
  let last = 1
  for(let i = 0; i < +n; ++i) {
    first = last
    last = fibonacci
    fibonacci = first + last
  }
  return fibonacci
};

// Do not edit below this line
module.exports = fibonacci;
