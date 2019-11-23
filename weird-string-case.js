//weird-string-case   https://www.codewars.com/kata/weird-string-case/train/javascript

//description: Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased.



function toWeirdCase(string) {
  return string.split(' ').map(word => word.split('').map((letter, index) => index % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase()).join('')).join(' ')
}


// function toWeirdCase(string) {
//   return [...string].map((letter, index) => index % 2 === 0 ? letter.toUpperCase() : letter).join('')
// }

// let toWeirdCase = string => [...string].map((letter, index) => index % 2 === 0 ? letter.toUpperCase() : letter).join('')


console.log(toWeirdCase('This'), 'ThIs');
console.log(toWeirdCase('is'), 'Is');
console.log(toWeirdCase('This is a test'), 'ThIs Is A TeSt');