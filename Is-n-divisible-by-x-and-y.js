//Is-n-divisible-by-x-and-y   https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript

//Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.



function isDivisible(n, x, y) {
  if (n % x === 0 && n % y === 0) {
    return true
  }

  return false
}



console.log(isDivisible(3, 3, 4), false);
console.log(isDivisible(12, 3, 4), true);
console.log(isDivisible(8, 3, 4), false);
console.log(isDivisible(48, 3, 4), true);