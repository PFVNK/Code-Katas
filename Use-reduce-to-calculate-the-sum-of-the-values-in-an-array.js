//Use reduce() to calculate the sum of the values in an array



function sum(array) {
  return array.reduce((acc, num) => {
    return acc + num
  })
}



var test1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var test2 = [71, -548, 12.3, 83, -47, -1.7, -892, 58, 31415, 2718, -38];

console.log(sum(test1), 55);
console.log(sum(test2), 32830.6);
