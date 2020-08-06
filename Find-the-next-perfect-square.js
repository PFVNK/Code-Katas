//xFind the next perfect square!  https://www.codewars.com/kata/56269eb78ad2e4ced1000013

//Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer. 



function findNextSquare(sq) {
  if (Math.sqrt(sq) !== Math.round(Math.sqrt(sq))) { return -1 }

  for (let i = sq + 1; ; i++) {
    if (Math.sqrt(i) === Math.round(Math.sqrt(i))) {
      return i
    }
  }
}



console.log(findNextSquare(121), 144);
console.log(findNextSquare(625), 676);
console.log(findNextSquare(319225), 320356);
console.log(findNextSquare(15241383936), 15241630849);

console.log(findNextSquare(155), -1);
console.log(findNextSquare(342786627), -1);