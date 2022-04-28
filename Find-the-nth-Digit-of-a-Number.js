//Find the nth Digit of a Number



var findDigit = function (num, nth) {
  if (nth <= 0) return -1

  let number = Math.abs(num).toString()

  if (nth > number.length) {
    return 0
  } else {
    return number.charAt(number.length - nth);
  }
}



console.log(findDigit(5673, 4), 5);
console.log(findDigit(129, 2), 2);
console.log(findDigit(-2825, 3), 8);
console.log(findDigit(-456, 4), 0);
console.log(findDigit(0, 20), 0);
console.log(findDigit(65, 0), -1);
console.log(findDigit(24, -8), -1);
