//Will-you-make-it  https://www.codewars.com/kata/5861d28f124b35723e00005e/train/javascript

//description: Considering these factors, write a function that tells you if it is possible to get to the pump or not.

//



const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  if (mpg * fuelLeft >= distanceToPump) {
    return true
  } else {
    return false
  }
};

const zeroFuel = (distanceToPump, mpg, fuelLeft) => mpg * fuelLeft >= distanceToPump ? true : false



console.log(zeroFuel(50, 25, 2), true);
console.log(zeroFuel(100, 50, 1), false);