//Fix string case



function solve(s) {
  let lower = 0
  let upper = 0

  for (let i = 0; i < s.length; i++) {
    let letter = s[i]
    if (letter === letter.toLowerCase()) {
      lower++
    } else {
      upper++
    }
  }

  if (upper > lower) {
    return s.toUpperCase()
  } else {
    return s.toLowerCase()
  }
}



console.log(solve("code"), "code");
console.log(solve("CODe"), "CODE");
console.log(solve("COde"), "code");
console.log(solve("Code"), "code");
