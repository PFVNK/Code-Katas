//Find-Maximum-and-Minimum-Values-of-a-List   https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

//Your task is to make two functions, max and min (maximum and minimum in PHP and Python) that take a(n) array/vector of integers list as input and outputs, respectively, the largest and lowest number in that array/vector.



var min = function (list) {
  return list.sort((a, b) => a - b)[0];
}

var max = function (list) {
  return list.sort((a, b) => b - a)[0];
}




console.log(min([-52, 56, 30, 29, -54, 0, -110]), -110);
console.log(min([42, 54, 65, 87, 0]), 0);
console.log(min([-1, -2, -3, -4, -5, -10]), -10)
console.log(max([4, 6, 2, 1, 9, 63, -134, 566]), 566);
console.log(max([5]), 5);