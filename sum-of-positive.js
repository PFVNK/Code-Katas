//sum-of-positive  https://www.codewars.com/kata/sum-of-positive/train/javascript

//description: You get an array of numbers, return the sum of all of the positives ones.
// Example[1, -4, 7, 12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.


function positiveSum(arr) {
  let array = arr.filter(x => x > 0)
  return array.length > 0 ? array.reduce((acc, cv) => acc + cv) : 0
}


console.log(positiveSum([1, 2, 3, 4, 5]), 15);
console.log(positiveSum([1, -2, 3, 4, 5]), 13);
console.log(positiveSum([]), 0);
console.log(positiveSum([-1, -2, -3, -4, -5]), 0);
console.log(positiveSum([-1, 2, 3, 4, -5]), 9);