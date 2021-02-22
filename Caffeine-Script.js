//Caffeine Script



function caffeineBuzz(n) {
  let string = ''

  if (n % 3 === 0 && n % 4 === 0 && n % 2 === 0) {
    string += 'CoffeeScript'
  } else if (n % 3 === 0 && n % 4 === 0) {
    string += 'Coffee'
  }
  if (n % 3 === 0 && n % 4 !== 0 && n % 2 === 0) {
    string += 'JavaScript'
  } else if (n % 3 === 0 && n % 4 !== 0) {
    string += 'Java'
  }


  return string ? string : "mocha_missing!"
}



console.log(caffeineBuzz(1), "mocha_missing!")
console.log(caffeineBuzz(3), "Java")
console.log(caffeineBuzz(6), "JavaScript")
console.log(caffeineBuzz(12), "CoffeeScript")
