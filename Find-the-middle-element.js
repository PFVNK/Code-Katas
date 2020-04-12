//Find the middle element   https://www.codewars.com/kata/545a4c5a61aa4c6916000755/train/javascript

//As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.



var gimme = function (inputArray) {
  let middle = [...inputArray].sort((a, b) => a - b)[1]
  return inputArray.indexOf(middle)
};



console.log(gimme([2, 3, 1]), 0, 'Finds the index of middle element');
console.log(gimme([5, 10, 14]), 1, 'Finds the index of middle element')