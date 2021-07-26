//Averages of numbers



function averages(numbers) {
  let avs = []

  if (numbers) {
    for (let i = 0; i < numbers.length - 1; i++) {
      let num = numbers[i]
      let nextNum = numbers[i + 1]

      avs.push((num + nextNum) / 2)
    }
  }

  return avs
}



console.log(averages([2, 2, 2, 2, 2]), [2, 2, 2, 2]);
console.log(averages([2, -2, 2, -2, 2]), [0, 0, 0, 0]);
console.log(averages([1, 3, 5, 1, -10]), [2, 4, 3, -4.5]);
