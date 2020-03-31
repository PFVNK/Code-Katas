//Factorial   https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc/train/javascript

//In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n



function factorial(n) {
  return [...Array(n).keys()].map(x => ++x).reduce((acc, num, i) => acc * num)
}

let factorial = n => n.length ?
  [...Array(n).keys()]
    .map(x => ++x)
    .reduce((acc, num, i) => acc * num) :
  1

function factorial(n) {
  if (n < 0 || n > 12) {
    throw RangeError
  }

  let factorial = 1

  for (i = 1; i <= n; i++) {
    factorial = factorial * i
  }

  return factorial
}



console.log(factorial(1), 1, "factorial for 0 is 1");
console.log(factorial(1), 1, "factorial for 1 is 1");
console.log(factorial(2), 2, "factorial for 2 is 2");
console.log(factorial(3), 6, "factorial for 3 is 6");