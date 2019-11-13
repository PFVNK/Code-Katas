//sort-the-odd   https://www.codewars.com/kata/sort-the-odd/train/javascript

//description: You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.


function sortArray(array) {
  let odd = []
  let even = []
  let answer = []

  for (i = 0; i < array.length; i++) {
    let number = array[i]

    if (number % 2 !== 0) {
      odd.push(number)
    } else {
      even.push(number)
    }
  }

  odd = odd.sort()

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      answer.push(even.shift());
    } else {
      answer.push(odd.shift());
    }
  }

  return answer
}


function sortArray(array) {
  const odd = array.filter((number) => number % 2).sort((a, b) => a - b);
  return array.map((number) => number % 2 ? odd.shift() : number);
}


console.log(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4])
// console.log(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0])
// console.log(sortArray([]), [])