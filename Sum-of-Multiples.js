//Sum of Multiples



function sumMul(n, m) {
  if (n <= 0 || m <= 0) return 'INVALID'
  let range = [n]
  let i = n

  do {
    i = i + n
    range.push(i)
  } while (i < m)

  return range.slice(0, -1).reduce((acc, num) => acc + num)
}



console.log(sumMul(0, 0), "INVALID");
console.log(sumMul(2, 9), 20);
console.log(sumMul(4, -7), "INVALID");
console.log(sumMul(3, 13), 30);
