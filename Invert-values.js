//Invert values  https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/javascript

//description: Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.



function invert(array) {
  let inverse = []

  for (i = 0; i < array.length; i++) {
    let number = array[i]
    if (number > 0) {
      inverse.push(-Math.abs(number))
    } else {
      inverse.push(Math.abs(number))
    }
  }

  return inverse
}

function invert(array) {
  return array.map(num => num > 0 ? -Math.abs(num) : Math.abs(num))
}

let invert = array => array.map(num => num > 0 ?
  -Math.abs(num) :
  Math.abs(num))



console.log(invert([1, 2, 3, 4, 5]), [-1, -2, -3, -4, -5]);
console.log(invert([1, -2, 3, -4, 5]), [-1, 2, -3, 4, -5]);
console.log(invert([]), []);
console.log(invert([0]), [0]);