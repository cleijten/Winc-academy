//Function declaration

function squaredNumbers1(number1, number2) {

  result = Math.pow((Math.pow(number1, 2) + Math.pow(number2, 2)),2);
  return result;
}

console.log(squaredNumbers1(1, 2)); // 25
console.log(squaredNumbers1(2, 2)); // 64
console.log(squaredNumbers1(2, 3)); // 169
console.log(squaredNumbers1(4, 3)); // 625

//Function expression

const squaredNumbers2 = function (number1, number2) {

  result = Math.pow((Math.pow(number1, 2) + Math.pow(number2, 2)), 2);
  return result;
};

console.log(squaredNumbers2(1, 2)); // 25
console.log(squaredNumbers2(2, 2)); // 64
console.log(squaredNumbers2(2, 3)); // 169
console.log(squaredNumbers2(4, 3)); // 625

//Arrow function

const squaredNumbers3 = (number1, number2) => {
  result = Math.pow((Math.pow(number1, 2) + Math.pow(number2, 2)), 2);
  return result;
};

console.log(squaredNumbers3(1, 2)); // 25
console.log(squaredNumbers3(2, 2)); // 64
console.log(squaredNumbers3(2, 3)); // 169
console.log(squaredNumbers3(4, 3)); // 625