//Transportation-on-vacation   https://www.codewars.com/kata/568d0dd208ee69389d000016/train/javascript

//descrition: Every day you rent the car costs $40. 
//If you rent the car for 7 or more days, you get $50 off your total. 
//Alternatively, if you rent the car for 3 or more days, you get $20 off your total.



function rentalCarCost(d) {
  if (d < 3) {
    return 40 * d
  } else if (d >= 3 && d < 7) {
    return 40 * d - 20
  } else if (d >= 7) {
    return 40 * d - 50
  }
}

function rentalCarCost(d) {
  if (d < 3) {
    return 40 * d
  }
  if (d >= 3 && d < 7) {
    return 40 * d - 20
  }
  if (d >= 7) {
    return 40 * d - 50
  }
}



//<3
console.log(rentalCarCost(1), 40);
console.log(rentalCarCost(2), 80);

//>3 <7
console.log(rentalCarCost(3), 100);
console.log(rentalCarCost(4), 140);
console.log(rentalCarCost(5), 180);
console.log(rentalCarCost(6), 220);

// //>7
console.log(rentalCarCost(7), 230);
console.log(rentalCarCost(8), 270);
console.log(rentalCarCost(9), 310);
console.log(rentalCarCost(10), 350);