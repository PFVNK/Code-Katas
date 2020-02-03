//Reversed sequence   https://www.codewars.com/kata/5a00e05cc374cb34d100000d

//description: Get the number n (n>0) to return the reversed sequence from n to 1.



const reverseSeq = n => {
  let reversed = []

  for (i = n; i >= 1; i--) {
    reversed.push(i)
  }

  return reversed
};

const reverseSeq = n => {
  return Array(n + 1).fill(null).map((_, i) => i).splice(1).reverse()
};

let reverseSeq = n => Array(n + 1)
  .fill(null)
  .map((_, i) => i)
  .splice(1)
  .reverse()


console.log(reverseSeq(5), [5, 4, 3, 2, 1]);