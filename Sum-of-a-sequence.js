//Sum-of-a-sequence   https://www.codewars.com/kata/586f6741c66d18c22800010a/train/javascript

//description: Your task is to make function, which returns the sum of a sequence of integers.



const sequenceSum = (begin, end, step) => {
  let sum = 0

  for (i = begin; i <= end; i += step) {
    sum += i
  }

  return sum
};


console.log(sequenceSum(2, 2, 2), 2)
console.log(sequenceSum(2, 6, 2), 12)
console.log(sequenceSum(1, 5, 1), 15)
console.log(sequenceSum(1, 5, 3), 5)



// sequenceSum(2, 2, 2) === 2
// sequenceSum(2, 6, 2) === 12 // 2 + 4 + 6
// sequenceSum(1, 5, 1) === 15 // 1 + 2 + 3 + 4 + 5
// sequenceSum(1, 5, 3) === 5 // 1 + 4