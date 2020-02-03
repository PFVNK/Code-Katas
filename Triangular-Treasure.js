//Triangular Treasure   https://www.codewars.com/kata/525e5a1cb735154b320002c8/train/javascript

//description: You need to return the nth triangular number. You should return 0 for out of range values:



function triangular(n) {
  let triangle = 0

  for (i = 0; i < n; i++) {
    triangle += i + 1
  }

  return triangle
}

function triangular(n) {
  if (n > 0) {
    return Array(n).fill(null).map((x, i) => i + 1).reduce((a, n, i) => {
      return a + i + 1
    })
  } else {
    return 0
  }
}


console.log(triangular(0), 0)
console.log(triangular(2), 3)
console.log(triangular(4), 10)