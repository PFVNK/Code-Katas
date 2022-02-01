//Filter the number



var FilterString = function (value) {
  console.log(typeof value)
  let numbers = []
  let split = value.split('')

  for (let i = 0; i < split.length; i++) {
    let character = split[i]

    if (Number(+character) && Number(+character) !== 0) {
      numbers.push(character)
    }
  }

  console.log(typeof +numbers.join(''))
  return numbers.join('')
}



console.log(FilterString("1230"), 123, 'Just return the numbers');
console.log(FilterString("a1b2c3"), 123, 'Just return the numbers');
console.log(FilterString("aa1bb2cc3dd"), 123, 'Just return the numbers');
