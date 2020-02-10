//Sum-of-all-the-multiples-of-3-or-5  https://www.codewars.com/kata/57f36495c0bb25ecf50000e7/train/javascript

//description: Your task is to write function findSum. Upto and including n, this function will return the sum of all multiples of 3 and 5.



function findSum(n) {
  let multiples = []

  for (i = 0; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      multiples.push(i)
    }
  }

  return multiples.reduce((acc, num) => acc + num)
}




console.log(findSum(5), 8);
console.log(findSum(10), 33);