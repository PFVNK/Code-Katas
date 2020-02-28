//Flatten   https://www.codewars.com/kata/5250a89b1625e5decd000413/train/javascript

//description: Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.



var flatten = function (array) {
  return [].concat.apply([], array)
}

let flatten = array => [].concat.apply([], array)



console.log(flatten([]), []);
console.log(flatten([1, 2, 3]), [1, 2, 3]);
console.log(flatten([[1, 2, 3], ["a", "b", "c"], [1, 2, 3]]), [1, 2, 3, "a", "b", "c", 1, 2, 3]);
console.log(flatten([[3, 4, 5], [[9, 9, 9]], ["a,b,c"]]), [3, 4, 5, [9, 9, 9], "a,b,c"]);
console.log(flatten([[[3], [4], [5]], [9], [9], [8], [[1, 2, 3]]]), [[3], [4], [5], 9, 9, 8, [1, 2, 3]]);