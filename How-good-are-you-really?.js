//How-good-are-you-really?   https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript

//description: You receive an array with your peers' test scores. Now calculate the average and compare your score! Return True if you're better, else False!



function betterThanAverage(classPoints, yourPoints) {
  let total = classPoints.reduce((acc, num) => {
    return acc + num
  })

  let average = total / classPoints.length

  return average < yourPoints ? true : false
}


console.log(betterThanAverage([2, 3], 5), true);
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75), true);
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9), false);
