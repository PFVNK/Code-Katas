//Triple trouble   https://www.codewars.com/kata/55d5434f269c0c3f1b000058/train/javascript

//description: which takes numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.



function tripledouble(num1, num2) {
  num1 = num1.toString();
  num2 = num2.toString();

  for (var j = 0; j < num1.length; j++) {
    digit = num1[j];
    for (var i = 0; i <= num1.length - 2; i++) {
      if ((num1.charAt(i) === digit) &&
        (num1.charAt(i + 1) === digit) &&
        (num1.charAt(i + 2) === digit)) {

        for (var k = 0; k < num2.length - 1; k++) {
          if ((num2.charAt(k) === digit) &&
            (num2.charAt(k + 1) === digit)) {
            return 1;
          }
        }
      }
    }
  }
  return 0;
}



console.log(tripledouble(451999277, 41177722899), 1);
console.log(tripledouble(1222345, 12345), 0);
console.log(tripledouble(12345, 12345), 0);
console.log(tripledouble(666789, 12345667), 1);
console.log(tripledouble(10560002, 100), 1);
console.log(tripledouble(1112, 122), 0);