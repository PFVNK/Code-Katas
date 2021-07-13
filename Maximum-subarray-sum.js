//Maximum subarray sum



var maxSequence = function (arr) {
  let currSum = 0
  let maxSum = 0

  for (let i = 0; i < arr.length; i++) {
    let currNum = arr[i]

    currSum = Math.max(currSum + currNum, 0)
    maxSum = Math.max(currSum, maxSum)
  }

  return maxSum
}



console.log(maxSequence([]), 0);
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
