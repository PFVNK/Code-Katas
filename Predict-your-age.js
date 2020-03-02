//Predict-your-age   https://www.codewars.com/kata/5aff237c578a14752d0035ae/train/javascript

//description: 
// Take a list of ages when each of your great - grandparent died.
// Multiply each number by itself.
// Add them all together.
// Take the square root of the result.
// Divide by two.



function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
  let ages = [age1, age2, age3, age4, age5, age6, age7, age8]

  return Math.floor(Math.sqrt(ages.map(num => num * num).reduce((acc, num) => acc + num)) / 2)
}



console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45), 86);