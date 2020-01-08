//odd-or-even  https://www.codewars.com/kata/odd-or-even/train/javascript

//description: Given an array of numbers (a list in groovy), determine whether the sum of all of the numbers is odd or even.



function oddOrEven(array) {
  if (array.length >= 1) {
    var sum = array.reduce((a, n) => a + n)
  } else {
    return 'even'
  }

  if (sum % 2 === 0) {
    return 'even'
  } else {
    return 'odd'
  }
}



console.log(oddOrEven([0]), 'even')
console.log(oddOrEven([1]), 'odd')
console.log(oddOrEven([]), 'even')
console.log(oddOrEven([0, 1, 5]), 'even')
console.log(oddOrEven([0, 1, 3]), 'even')
console.log(oddOrEven([1023, 1, 2]), 'even')
console.log(oddOrEven([0, -1, -5]), 'even')
console.log(oddOrEven([0, -1, -3]), 'even')
console.log(oddOrEven([-1023, 1, -2]), 'even')
console.log(oddOrEven([0, -1, 2]), 'odd')
console.log(oddOrEven([0, 1, -4]), 'odd')
console.log(oddOrEven([-1023, -1, 3]), 'odd')
console.log(oddOrEven([0, 1, 2]), 'odd')
console.log(oddOrEven([0, 1, 4]), 'odd')
console.log(oddOrEven([1023, 1, 3]), 'odd')