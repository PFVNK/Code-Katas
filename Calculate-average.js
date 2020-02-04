//Calculate average   https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript

//description: Write function avg which calculates average of numbers in given list.



function find_average(array) {
  let sum = array.reduce((a, n) => a + n)
  return sum / array.length
}

function find_average(array) {
  return array.reduce((a, n) => a + n) / array.length
}

let find_average = array => array.reduce((a, n) => a + n) / array.length



console.log(find_average([1, 1, 1]), 1);
console.log(find_average([1, 2, 3]), 2);