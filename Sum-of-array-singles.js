//Sum of array singles



function repeats(arr) {
  let equation = []
  let sorted = arr.sort((a, b) => a - b)

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] !== sorted[i + 1] && sorted[i] !== sorted[i - 1]) {
      equation.push(sorted[i])
    }
  }

  return equation.reduce((acc, num) => acc + num)
};



console.log(repeats([4, 5, 7, 5, 4, 8]), 15);
console.log(repeats([9, 10, 19, 13, 19, 13]), 19);
console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11]), 12);
console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13]), 22);
console.log(repeats([5, 10, 19, 13, 10, 13]), 24);
