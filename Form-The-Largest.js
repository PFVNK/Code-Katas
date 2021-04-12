//Form The Largest



// function maxNumber(n) {
//   return n.toString().split('').map(num => +num).sort((a, b) => b - a).join('')
// }

const maxNumber = (n) => n.toString()
  .split('')
  .map(num => +num)
  .sort((a, b) => b - a)
  .join('')

console.log(maxNumber(213), 321);
console.log(maxNumber(7389), 9873);
console.log(maxNumber(63792), 97632);
console.log(maxNumber(566797), 977665);
console.log(maxNumber(1000000), 1000000);
