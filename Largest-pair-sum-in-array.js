//Largest pair sum in array   https://www.codewars.com/kata/556196a6091a7e7f58000018/train/javascript

//Given a sequence of numbers, find the largest pair sum in the sequence.



function largestPairSum(numbers) {
  let negative = [...numbers].sort((a, b) => a + b)
  let positive = [...numbers].sort((a, b) => b - a)

  if (negative[0] < 0 && negative[negative.length - 1] >= 0) {
    return negative[negative.length - 1] + negative[negative.length - 2]
  }

  return negative[0] < 0 ? negative[0] + negative[1] : positive[0] + positive[1]
}

function largestPairSum(numbers) {
  numbers.sort(function (a, b) { return b - a })
  return numbers[0] + numbers[1]
}

function largestPairSum(numbers) {
  var [a, b] = numbers.sort((a, b) => b - a)

  return a + b
}



console.log(largestPairSum([-10, -8, -16, -18, -19]), -18);
console.log(largestPairSum([10, 14, 2, 23, 19]), 42)
console.log(largestPairSum([99, 2, 2, 23, 19]), 122)
console.log(largestPairSum([-100, -29, -24, -19, 19]), 0)