//Playing with digits



function digPow(n, p) {
  numArr = n.toString().split('').map(num => +num)
  let equation = []

  for (let i = 0, power = p; i < numArr.length; i++, power++) {
    let number = numArr[i]
    equation.push(Math.pow(number, power))
  }

  let sum = equation.reduce((acc, num) => acc += num) / n


  return sum === Math.floor(sum) ? sum : -1
}