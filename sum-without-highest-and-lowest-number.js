//sum-without-highest-and-lowest-number  https://www.codewars.com/kata/sum-without-highest-and-lowest-number/train/javascript

//description: Sum all the numbers of the array except the highest and the lowest element (the value, not the index!).



function sumArray(array) {
  if (array !== null && array.length > 1) {
    return array.sort((a, b) => a - b).slice(1, -1).reduce((total, num) => total + num, 0)
  } else {
    return 0
  }
}

let sumArray = array => array ?
  array.sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((total, num) => total + num, 0) :
  0




console.log(sumArray([6, 2, 1, 8, 10]), 16);
console.log(sumArray(null), 0);
console.log(sumArray([]), 0);
console.log(sumArray([6]), 0);