const add = function(...numbers) {
	return numbers.reduce((a, b) => a + b, 0)
};

const subtract = function(...numbers) {
	return numbers.reduce((a, b) => a - b)
};

const sum = function(numbers) {
		return numbers.reduce((a, b) => a + b, 0)
};

const multiply = function(numbers) {
  return numbers.reduce((a, b) => a * b)
};

const power = function(...numbers) {
	return numbers.reduce((a, b) => a ** b)
};

const factorial = function(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
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
