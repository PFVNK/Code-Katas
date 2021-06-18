//Find The Duplicated Number in a Consecutive Unsorted List



function findDup(arr) {
  let sorted = arr.sort((a, b) => a - b)

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] === sorted[i + 1]) {
      return sorted[i]
    }
  }
}



console.log(findDup([1, 2, 2, 3]), 2);
console.log(findDup([1, 3, 2, 5, 4, 5, 7, 6]), 5);
