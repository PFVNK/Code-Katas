// /Pre-FizzBuzz Workout #1



function preFizz(n) {
  let arr = []

  for (let i = 0; i <= n; i++) {
    arr.push(i)
  }

  return arr.slice(1)
}



console.log(preFizz(1), [1]);
console.log(preFizz(2), [1, 2]);
console.log(preFizz(3), [1, 2, 3]);
console.log(preFizz(4), [1, 2, 3, 4]);
console.log(preFizz(5), [1, 2, 3, 4, 5]);
