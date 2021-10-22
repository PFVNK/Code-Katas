//Find Multiples of a Number



function findMultiples(integer, limit) {
  let multiples = []
  for (let i = 1; i < limit + 1; i++) {
    if (integer * i <= limit) {
      multiples.push(integer * i)
    }
  }

  return multiples
}



console.log(findMultiples(5, 25), [5, 10, 15, 20, 25])
console.log(findMultiples(1, 2), [1, 2])
console.log(findMultiples(5, 7), [5])
console.log(findMultiples(4, 27), [4, 8, 12, 16, 20, 24])
console.log(findMultiples(11, 54), [11, 22, 33, 44])
