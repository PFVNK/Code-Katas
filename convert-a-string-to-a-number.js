//convert-a-string-to-a-number  https://www.codewars.com/kata/convert-a-string-to-a-number/train/javascript

//description: We need a function that can transform a string into a number. What ways of achieving this do you know?



var stringToNumber = function (str) {
  return Number(str)
}

var stringToNumber = function (str) {
  return +str
}

var stringToNumber = function (str) {
  return parseInt(str)
}

let stringToNumber = str => +str

let stringToNumber = parseInt




console.log(stringToNumber("1234"), 1234)
console.log(stringToNumber("605"), 605)
console.log(stringToNumber("1405"), 1405)
console.log(stringToNumber("-7"), -7)