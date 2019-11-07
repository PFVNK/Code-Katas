//return-negative  https://www.codewars.com/kata/return-negative/train/javascript

//description: In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?


function makeNegative(num) {
  if (num === 0) { return 0 }
  return num < 0 ? num : -Math.abs(num)
}


console.log(makeNegative(42), -42);
console.log(makeNegative(-5), -5);
console.log(makeNegative(0), 0);
console.log(makeNegative(0.12), -0.12);