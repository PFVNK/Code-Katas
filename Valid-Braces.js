//Valid-Braces   https://www.codewars.com/kata/5277c8a221e209d3f6000b56/train/javascript

//Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.



const regex = /\(\)|\[\]|\{\}/;
const validBraces = braces => regex.test(braces)
  ? validBraces(braces.replace(regex, ''))
  : '' === braces



console.log(validBraces("()"), true);
console.log(validBraces("[(])"), false);