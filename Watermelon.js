//Watermelon  https://www.codewars.com/kata/55192f4ecd82ff826900089e/train/javascript

//Given an integral number of watermelons w(1 ≤ w ≤ 100; 1 ≤ w in Haskell), check whether Pete and Billy can divide the melons so that each of them gets an even amount.



function divide(weight) {
  //Check if weight can be dived evenly and is not 2
  if (weight != 2 && weight % 2 === 0) {
    return true
  }

  //return false
  return false
}

const divide = weight => weight != 2 && weight % 2 === 0 ? true : false



console.log(divide(4), true);
console.log(divide(2), false);
console.log(divide(5), false);
console.log(divide(88), true);
console.log(divide(100), true);
console.log(divide(67), false);
console.log(divide(90), true);
console.log(divide(10), true);
console.log(divide(99), false);
console.log(divide(32), true);