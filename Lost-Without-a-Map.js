//Lost-Without-a-Map  https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript

//description: Given an array of integers, return a new array with each value doubled.



function maps(x) {
  return x.map(number => number + number)
}

let maps = number => x.map(number => number + number)

function maps(x) {
  let doubled = []
  for (i = 0; i < x.length; i++) {
    let number = x[i]
    doubled.push(number + number)
  }

  return doubled
}



console.log(maps([1, 2, 3]), [2, 4, 6]);
console.log(maps([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8]);
console.log(maps([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4]); 