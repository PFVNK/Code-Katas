//What's the real floor?



function getRealFloor(n) {
  if (n <= 0) return n
  if (n <= 13 && n > 0) return n - 1
  if (n > 13) return n - 2
}

function getRealFloor(n) {
  return n <= 0 ?
    n : n <= 13 && n > 0 ?
      n - 1 :
      n - 2
}



console.log(getRealFloor(1), 0);
console.log(getRealFloor(5), 4);
console.log(getRealFloor(15), 13);
