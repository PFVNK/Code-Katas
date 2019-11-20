//remove-the-minimum   https://www.codewars.com/kata/remove-the-minimum/train/javascript

//description: Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.



function removeSmallest(numbers) {
  if (numbers.length > 0) {
    let smallest = [...numbers].sort((a, b) => a - b).shift()
    let smallIndex = numbers.findIndex(x => x === smallest)
    return [...numbers].filter((number, index) => index !== smallIndex)
  } else {
    return []
  }
}



console.log(removeSmallest([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
console.log(removeSmallest([5, 3, 2, 1, 4]), [5, 3, 2, 4]);
console.log(removeSmallest([2, 2, 1, 2, 1]), [2, 2, 2, 1]);
console.log(removeSmallest([391, 51]), [51]);
console.log(removeSmallest([71, 387, 103, 99]), [387, 103, 99]);
console.log(removeSmallest([]), []);