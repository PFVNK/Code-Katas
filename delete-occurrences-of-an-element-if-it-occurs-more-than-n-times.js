//delete-occurrences-of-an-element-if-it-occurs-more-than-n-times   https://www.codewars.com/kata/delete-occurrences-of-an-element-if-it-occurs-more-than-n-times/train/javascript

//description: Given a list lst and a number N, create a new list that contains each number of lst at most N times without reordering



function deleteNth(arr, n) {
  const repeated = {}

  return arr.filter(num => {
    repeated[num] = (repeated[num] || 0) + 1
    const repetitions = repeated[num]

    return repetitions <= n
  })
}



console.log(deleteNth([20, 37, 20, 21], 1), [20, 37, 21])
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3), [1, 1, 3, 3, 7, 2, 2, 2])