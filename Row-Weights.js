//Row Weights



function rowWeights(array) {
  let even = []
  let odd = []

  for (let i = 0; i < array.length; i++) {
    let num = array[i]
    if (i % 2 === 0) {
      even.push(num)
    } else {
      odd.push(num)
    }
  }

  if (array.length < 2 && array[0] === 0) {
    return [0, 0]
  }

  let evenTotal = even.reduce((acc, num) => acc + num)
  let oddTotal = odd.reduce((acc, num) => acc + num, 0)

  if (array.length < 2 && array[0] !== 0) {
    return [evenTotal, 0]
  }

  return [evenTotal, oddTotal]
}

function rowWeights(array) {
  let even = array.filter((_, i) => i % 2 === 0).reduce((acc, num) => acc + num, 0)
  let odd = array.filter((_, i) => i % 2 !== 0).reduce((acc, num) => acc + num, 0)

  return [even, odd]
}



console.log(rowWeights([80]), [80, 0]);
console.log(rowWeights([100, 50]), [100, 50]);
console.log(rowWeights([50, 60, 70, 80]), [120, 140]);
console.log(rowWeights([13, 27, 49]), [62, 27]);
console.log(rowWeights([70, 58, 75, 34, 91]), [236, 92]);
console.log(rowWeights([29, 83, 67, 53, 19, 28, 96]), [211, 164]);
console.log(rowWeights([0]), [0, 0]);
console.log(rowWeights([100, 51, 50, 100]), [150, 151]);
console.log(rowWeights([39, 84, 74, 18, 59, 72, 35, 61]), [207, 235]);
console.log(rowWeights([0, 1, 0]), [0, 1]);
