//ones-and-zeros   https://www.codewars.com/kata/ones-and-zeros/train/javascript

//description: Given an array of ones and zeroes, convert the equivalent binary value to an integer.



const binaryArrayToNumber = arr => {
  return parseInt(arr.join(''), 2)
};

let binaryArrayToNumber = arr => parseInt(arr.join(''), 2)



console.log(binaryArrayToNumber([0, 0, 0, 1]), 1);
console.log(binaryArrayToNumber([0, 0, 1, 0]), 2);
console.log(binaryArrayToNumber([1, 1, 1, 1]), 15);
console.log(binaryArrayToNumber([0, 1, 1, 0]), 6);