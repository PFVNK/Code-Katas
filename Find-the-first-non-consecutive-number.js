//Find-the-first-non-consecutive-number    https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/train/javascript

//Your task is to find the first element of an array that is not consecutive.



function firstNonConsecutive(arr) {
  for (i = 0; i < arr.length - 1; i++) {
    let currNum = arr[i] + 1
    let nextNum = arr[i + 1]
    if (currNum !== nextNum) return nextNum
  }
  return null
}

// function firstNonConsecutive(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     const num = arr[i] + 1
//     const consecutive = arr[i + 1]
//     if (num !== consecutive) return consecutive
//   }
//   return null
// }


console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]), 6)
console.log(firstNonConsecutive([1, 2, 3, 4, 5, 6, 7, 8]), null)