const add = function(a, ...b) {
	return +a + +b
};

const subtract = function(a, ...b) {
	return a - b
};

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0)
};

const multiply = function(array) {
  return array.reduce((total, current) => total * current, 1)
};

const power = function(a, ...b) {
  return a ** b
};

const factorial = function(num) {
  if (num === 0) {num = 1}
	for (let i = num; i > 1;) {num *= --i}
  return num
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
