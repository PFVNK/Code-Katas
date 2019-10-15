// FIND THE ODD INT  https://www.codewars.com/kata/54da5a58ea159efa38000836

// DESRIPTION: Given an array, find the int that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.



function findOdd(A) {
  let freq = {}
  for (i = 0; i < A.length; i++) {
    let number = A[i]
    if (freq[number]) {
      freq[number]++
    } else {
      freq[number] = 1
    }
  }

  let entries = Object.entries(freq)
  for (const [number, amount] of entries) {
    if (amount % 2 !== 0) {
      return +number
    }
  }
}