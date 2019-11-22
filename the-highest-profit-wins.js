//the-highest-profit-wins   https://www.codewars.com/kata/the-highest-profit-wins/train/javascript

//description: Write a function that returns both the minimum and maximum number of the given list/array. 



function minMax(arr) {
  console.log(arr)
  let low = arr.sort((a, b) => a - b).shift()
  let high = arr.sort((a, b) => a - b).pop()

  if (low && high) {
    return [low, high]
  } else {
    return [low, low]
  }
}

function minMax(arr) {
  let low = arr.sort((a, b) => a - b).shift()
  let high = arr.sort((a, b) => a - b).pop()

  return low && high ? [low, high] : [low, low]
}



console.log(minMax([1, 2, 3, 4, 5]), [1, 5]);
console.log(minMax([2334454, 5]), [5, 2334454]);
console.log(minMax([0.9981051328378547]), [0.9981051328378547, 0.9981051328378547]);