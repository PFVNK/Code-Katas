//Flatten and sort an array



"use strict";

function flattenAndSort(array) {
  return array.flat().sort((a, b) => a - b);
}

function flattenAndSort(array) {
  if (array.length) {
    return array.reduce((acc, num) => {
      return acc.concat(num)
    }).sort((a, b) => a - b)
  } else {
    return []
  }
}



console.log(
  flattenAndSort([]), []);
console.log(
  flattenAndSort([[], []]), []);
console.log(
  flattenAndSort([[], [1]]), [1]);
console.log(
  flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(
  flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]), [1, 2, 3, 4, 5, 6, 100]);
