//Sum of Minimums!



function sumOfMinimums(arr) {
  let sum = 0

  for (let i = 0; i < arr.length; i++) {
    let array = arr[i]
    sum += array.sort((a, b) => a - b)[0]
  }

  return sum
}

// function sumOfMinimums(arr) {
//   return arr.map(array => array.sort()[0]).reduce((acc, num) => acc + num)
// }



// console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]), 9)
// console.log(sumOfMinimums([[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]]), 76)
console.log(sumOfMinimums([[49, 140, 61, 85, 104], [132, 5, 144, 104, 47]]), 54)
