//Boiled Eggs



function cookingTime(eggs) {
  let mins = 0

  while (eggs > 0) {
    eggs -= 8
    mins += 5
  }

  return mins
}



console.log(cookingTime(0), 0, '0 eggs');
console.log(cookingTime(5), 5, '5 eggs');
console.log(cookingTime(10), 10, '10 eggs');
