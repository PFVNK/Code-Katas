//Fizz Buzz  https://www.codewars.com/kata/5300901726d12b80e8000498/train/javascript

//Replace certain values however if any of the following conditions are met:
// If the value is a multiple of 3: use the value 'Fizz' instead
// If the value is a multiple of 5: use the value 'Buzz' instead
// If the value is a multiple of 3 & 5: use the value 'FizzBuzz' instead



function fizzbuzz(n) {
  return [...Array(n).keys()].map(x => ++x).map(num =>
    num % 3 === 0 && num % 5 === 0 ? 'FizzBuzz' :
      num % 3 === 0 ? 'Fizz' :
        num % 5 === 0 ? 'Buzz' :
          num
  )
}



console.log(fizzbuzz(10))



