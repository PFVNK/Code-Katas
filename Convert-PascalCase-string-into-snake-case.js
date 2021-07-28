//Convert PascalCase string into snake_case



function toUnderscore(string) {
  if (string === Number(string)) return string.toString()

  let underStr = []

  for (let i = 0; i < string.length; i++) {
    let letter = string[i]
    if (letter === letter.toLowerCase()) {
      underStr.push(letter)
    } else if (letter === letter.toUpperCase()) {
      underStr.push('_')
      underStr.push(letter.toLowerCase())
    }
  }

  return underStr.join('').substring(1)
}



console.log(toUnderscore('TestController'), 'test_controller')
console.log(toUnderscore('MoviesAndBooks'), 'movies_and_books')
console.log(toUnderscore('App7Test'), 'app7_test')
console.log(toUnderscore(1), "1")
