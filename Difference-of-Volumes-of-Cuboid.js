//Difference of Volumes of Cuboids



function findDifference(a, b) {
  return Math.abs(a.reduce((acc, num) => acc * num) - b.reduce((acc, num) => acc * num))
}



console.log(findDifference([1, 4, 4], [3, 2, 5]), 14);
console.log(findDifference([9, 7, 2], [5, 2, 2]), 106);
console.log(findDifference([11, 2, 5], [1, 10, 8]), 30);
console.log(findDifference([4, 4, 7], [3, 9, 3]), 31);
console.log(findDifference([15, 20, 25], [10, 30, 25]), 0);
