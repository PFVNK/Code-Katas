//Factorial Factory



function factorial(n) {
  if (n < 0) return null
  if (n === 0) return 1
  let problem = []

  for (let i = 1; i < n + 1; i++) {
    problem.push(i)
  }

  return problem.reduce((acc, num) => acc * num)
}



console.log(factorial(2), 2);
console.log(factorial(5), 120);
console.log(factorial(-1), null);
