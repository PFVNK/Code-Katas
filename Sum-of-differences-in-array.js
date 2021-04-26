//Sum of differences in array



function sumOfDifferences(arr) {
  if (arr.length <= 1) return 0

  arr.sort((a, b) => b - a)
  let sum = []

  for (let i = 0; i < arr.length - 1; i++) {
    sum.push(arr[i] - arr[i + 1])
  }

  return sum.reduce((acc, num) => acc + num)
}



console.log(sumOfDifferences([1, 2, 10]), 9);
console.log(sumOfDifferences([-3, -2, -1]), 2);
