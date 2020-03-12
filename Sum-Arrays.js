//Sum-Arrays   https://www.codewars.com/kata/53dc54212259ed3d4f00071c/train/javascript

//description: that takes an array of numbers and returns the sum of the numbers.



function sum(numbers) {
  let arrSum = 0

  for (i = 0; i < numbers.length; i++) {
    let number = numbers[i]
    arrSum += number
  }

  return arrSum
};

function sum(numbers) {
  return numbers.length ? numbers.reduce((acc, num) => acc + num) : []
};

let sum = numbers => numbers.reduce((acc, num) => { return acc + num }, [])



console.log(sum([]), 0);
console.log(sum([1, 5.2, 4, 0, -1]), 9.2);