//Square(n) Sum   https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript

//Complete the square sum function so that it squares each number passed into it and then sums the results together.



function squareSum(numbers) {
  return numbers.map(num => Math.pow(num, 2)).reduce((acc, num) => acc + num)
}

let squareSum = numbers => numbers.length ?
  numbers
    .map(num => Math.pow(num, 2))
    .reduce((acc, num) => acc + num) :
  0

function squareSum(numbers) {
  let answer = 0

  for (i = 0; i < numbers.length; i++) {
    let number = Math.pow(numbers[i], 2)
    answer += number
  }

  return answer
}



console.log(squareSum([1, 2]), 5)
console.log(squareSum([0, 3, 4, 5]), 50)