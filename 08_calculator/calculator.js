const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(inputs) {
	return inputs.reduce((a,b)=> a + b, 0)
};

const multiply = function(inputs) {
 return inputs.reduce((a,b)=> a *b )
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(input) {
  if(input === 0) return 1;
  let product = 1;
  for(let i = input; i > 0; i--){
    product *= i;
  }
  return product
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
