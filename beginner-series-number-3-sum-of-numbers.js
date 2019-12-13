//beginner-series-number-3-sum-of-numbers   https://www.codewars.com/kata/beginner-series-number-3-sum-of-numbers/train/javascript

//description: Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal return a or b.



function getSum(a, b) {
  let finalNum = 0

  if (a === b) {
    return a
  }

  if (a > b) {
    for (i = b; i <= a; i++) {
      finalNum += i
    }
  }

  for (i = a; i <= b; i++) {
    finalNum += i
  }

  return finalNum
}



console.log(getSum(0, -1), -1);
console.log(getSum(0, 1), 1);
console.log(getSum(1, 2), 3);
console.log(getSum(1, 3), 6);
console.log(getSum(4, 1), 10);