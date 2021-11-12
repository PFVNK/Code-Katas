//Grasshopper - Array Mean



var findAverage = function (nums) {
  return nums.reduce((acc, num) => acc + num) / nums.length
}



console.log(findAverage([1]), 1)
console.log(findAverage([1, 3, 5, 7]), 4)
