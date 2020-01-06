//count-the-monkeys  https://www.codewars.com/kata/count-the-monkeys/train/javascript

//description: Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.



function monkeyCount(n) {
  let monkeys = []

  for (i = 1; i <= n; i++) {
    monkeys.push(i)
  }

  return monkeys
}



console.log((monkeyCount(5)), [1, 2, 3, 4, 5]);
console.log((monkeyCount(3)), [1, 2, 3]);
console.log((monkeyCount(9)), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log((monkeyCount(10)), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log((monkeyCount(20)), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);