//Convert-a-string-to-an-array   https://www.codewars.com/kata/57e76bc428d6fbc2d500036d/train/javascript

//Write a function to split a string and convert it into an array of words



function stringToArray(string) {
  return string.split(' ')
}

let stringToArray = string => string.split(' ')



console.log(stringToArray("Robin Singh"), ["Robin", "Singh"]);
console.log(stringToArray("I love arrays they are my favorite"), ["I", "love", "arrays", "they", "are", "my", "favorite"]);