//basic-mathematical-operations   https://www.codewars.com/kata/basic-mathematical-operations/train/javascript

//description: Your task is to create a function that does four basic mathematical operations.



function basicOp(operation, value1, value2) {
  return eval(`${value1}${operation}${value2}`)
}

let basicOp = (operation, value1, value2) => eval(`${value1}${operation}${value2}`)



console.log(basicOp('+', 4, 7), 11);
console.log(basicOp('-', 15, 18), -3);
console.log(basicOp('*', 5, 5), 25);
console.log(basicOp('/', 49, 7), 7);