//Count-by-X   https://www.codewars.com/kata/5513795bd3fafb56c200049e/train/javascript

//Create a function with two arguments that will return an array of the first (n) multiples of (x).



function countBy(x, n) {
  var z = [];
  let end = x * n
  for (i = 1; i <= end; i++) {
    if (i % x === 0) {
      z.push(i)
    }
  }
  return z;
}



console.log(countBy(1, 5), [1, 2, 3, 4, 5], "Array does not match")
console.log(countBy(2, 5), [2, 4, 6, 8, 10], "Array does not match")