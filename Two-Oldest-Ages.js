//Two-Oldest-Ages   https://www.codewars.com/kata/511f11d355fe575d2c000001/train/javascript

//The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. 



function twoOldestAges(ages) {
  ages.sort((a, b) => a - b)
  return ages.slice(-2)
}

let twoOldestAges = ages =>
  ages
    .sort((a, b) => a - b)
    .slice(-2)



console.log(twoOldestAges([1, 2, 10, 8]), [8, 10])