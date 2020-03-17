//Find-the-divisors   https://www.codewars.com/kata/544aed4c4a30184e960010f4/train/javascript

//Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. 



function divisors(integer) {
  let divs = []

  for (i = 2; i < integer; i++) {
    if (integer % i === 0) {
      divs.push(i)
    }
  }

  return divs.length ? divs : `${integer} is prime`
};



console.log(divisors(15), [3, 5]);
console.log(divisors(12), [2, 3, 4, 6]);
console.log(divisors(13), "13 is prime");