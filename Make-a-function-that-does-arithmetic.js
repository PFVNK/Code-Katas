//Make-a-function-that-does-arithmetic  https://www.codewars.com/kata/583f158ea20cfcbeb400000a/train/javascript

//description: Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.



function arithmetic(a, b, operator) {
  if (operator === 'add') { return a + b }
  if (operator === 'subtract') { return a - b }
  if (operator === 'multiply') { return a * b }
  if (operator === 'divide') { return a / b }
}

function arithmetic(a, b, operator) {
  return operator === 'add' ? a + b :
    operator === 'subtract' ? a - b :
      operator === 'multiply' ? a * b :
        operator === 'divide' ? a / b : 0
}


console.log(arithmetic(1, 2, "add"), 3);
console.log(arithmetic(8, 2, "subtract"), 6);
console.log(arithmetic(5, 2, "multiply"), 10);
console.log(arithmetic(8, 2, "divide"), 4);