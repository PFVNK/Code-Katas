//moving-zeros-to-the-end   https://www.codewars.com/kata/moving-zeros-to-the-end/train/javascript

//description: Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.


var moveZeros = function (arr) {
  let filtArr = arr.filter(x => x !== 0)
  let diff = arr.length - filtArr.length
  let zero = new Array(diff).fill(0)

  return [...filtArr, ...zero]
}


console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]), [1, 2, 1, 1, 3, 1, 0, 0, 0, 0])
console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]), [false, 1, 1, 2, 1, 3, "a", 0, 0])