//youre-a-square  https://www.codewars.com/kata/youre-a-square/train/javascript

//description: Given an integral number, determine if it's a square number:

var isSquare = function (n) {
  for (var i = 0; i * i <= n; i++) {
    if (i * i === n)
      return true;
  }
  return false;
}


console.log(isSquare(-1), false, "-1: Negative numbers cannot be square numbers");
console.log(isSquare(0), true, "0 is a square number (0 * 0)");
console.log(isSquare(3), false, "3 is not a square number");
console.log(isSquare(4), true, "4 is a square number (2 * 2)");
console.log(isSquare(25), true, "25 is a square number (5 * 5)");
console.log(isSquare(26), false, "26 is not a square number");