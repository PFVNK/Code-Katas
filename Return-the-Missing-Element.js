//Return the Missing Element



function getMissingElement(superImportantArray) {
  let sorted = superImportantArray.sort()

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] + 1 !== sorted[i + 1]) {
      return sorted[i] + 1
    }
  }
}



console.log(getMissingElement([0, 5, 1, 3, 2, 9, 7, 6, 4]), 8);
console.log(getMissingElement([9, 2, 4, 5, 7, 0, 8, 6, 1]), 3);
