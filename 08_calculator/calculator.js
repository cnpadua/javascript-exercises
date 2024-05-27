const add = function(a, b) {
  return a+b;
};

const subtract = function(a,b) {
  return a-b;
};

const sum = function(arr) {
  if (arr.length === 0){
    return 0;
  } else {
    return arr.reduce((total, curr) => {
      return total + curr
    }, 0);
  }
	
};

const multiply = function(arr) {
  return arr.reduce((total,curr)=>{
    return total * curr;
  }, 1);
};

const power = function(a, b) {
  return a**b;
};

const factorial = function(a) {
	if (a === 0){
    return 1;
  } else {
    return a * factorial(a-1);
  }
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
