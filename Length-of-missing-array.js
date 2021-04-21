//Length of missing array



function getLengthOfMissingArray(arrayOfArrays) {
  if (Boolean(arrayOfArrays) !== true) return 0
  let sorted = arrayOfArrays.sort((a, b) => a.length - b.length)

  for (let i = 0; i < sorted.length - 1; i++) {
    if (Boolean(sorted[i]) !== true) return 0
    if (sorted[i].length + 1 !== sorted[i + 1].length) {
      return sorted[i].length + 1
    }
  }
}



// console.log(
//   getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]), 3);
// console.log(
//   getLengthOfMissingArray([[5, 2, 9], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]), 2);
console.log(
  getLengthOfMissingArray([[5, 2, 9], [4, 5, 1, 1, 5, 6], [1, 1], [5, 6, 7, 8, 9]]), 4);
// console.log(
//   getLengthOfMissingArray([[null], [null, null, null]]), 2);
// console.log(
//   getLengthOfMissingArray([['a', 'a', 'a'], ['a', 'a'], ['a', 'a', 'a', 'a'], ['a'], ['a', 'a', 'a', 'a', 'a', 'a']]), 5);
// console.log(
//   getLengthOfMissingArray([]), 0);
