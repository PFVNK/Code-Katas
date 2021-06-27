//Generate range of integers



function generateRange(min, max, step) {
  let steps = []


  for (let i = min; i <= max; i += step) {
    steps.push(i)
  }

  return steps
}



console.log(generateRange(2, 10, 2), [2, 4, 6, 8, 10]);
console.log(generateRange(1, 10, 4), [1, 5, 9]);
