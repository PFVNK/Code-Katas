//Valid-Phone-Number   https://www.codewars.com/kata/525f47c79f2f25a4db000025/train/javascript

//Write a function that accepts a string, and returns true if it is in the form of a phone number.



function validPhoneNumber(phoneNumber) {
  let num = 0
  let space = 0
  let dash = 0
  let quote = 0

  if (phoneNumber.match(/[A-Za-z]/)) { return false }

  for (i = 0; i < phoneNumber.length; i++) {
    let char = phoneNumber[i]
    if (char === '(' || char === ')') { quote += 1 }
    if (!isNaN(char) && char !== ' ') { num += 1 }
    if (char === '-') { dash += 1 }
    if (char === ' ') { space += 1 }
  }

  if (num === 10 && space === 1 && dash === 1 && quote === 2) {
    return true
  } else {
    return false
  }
}



console.log(validPhoneNumber("(123) 456-7890"), true);
console.log(validPhoneNumber("(1111)555 2345"), false);
console.log(validPhoneNumber("(098) 123 4567"), false);
console.log(validPhoneNumber("(123) 456-7890abc"), false);