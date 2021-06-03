//Halving Sum



function halvingSum(n) {
  let score = 0

  while (n >= 1) {
    score += n
    n = Math.floor(n / 2)
  }

  return score
}



console.log(halvingSum(25), 47);
console.log(halvingSum(127), 247);
