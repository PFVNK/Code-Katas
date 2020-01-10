//Summing-a-numbers-digits  https://www.codewars.com/kata/52f3149496de55aded000410/train/javascript

//description: Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits



function sumDigits(number) {
  if (number > 0) {
    number = Math.abs(number)
    return number.toString().split('').reduce((a, n) => +a + +n)
  } else {
    return 0
  }

}



console.log(sumDigits(10), 1);
console.log(sumDigits(99), 18);
console.log(sumDigits(-32), 5);