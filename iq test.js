// IQ TEST  https://www.codewars.com/kata/iq-test/train/javascript

// DESCRIPTION: 

// iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even
// iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd


function iqTest(numbers) {
  let odd = 0
  let even = 0

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      even += 1
    } else {
      odd += 1
    }
  }

  if (even > odd) {
    numbers = numbers.split(' ').map(Number)
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 !== 0) {
        return i + 1
      }
    }
  }
}


console.log(iqTest("2 4 7 8 10"), 3);
console.log(iqTest("1 2 2"), 1);
console.log(iqTest("1 1 2"), 3);
console.log(iqTest("5 2 3"), 2);




