//no-oddities-here   https://www.codewars.com/kata/no-oddities-here/train/javascript

//description: Write a small function that returns the values of an array that are not odd. 



function noOdds(values) {
  return values.filter(number => number % 2 === 0)
}

let noOdds = values => values.filter(number => number % 2 === 0)



console.log(noOdds([2, 7, 4]), [2, 4]);