//descending-order  https://www.codewars.com/kata/descending-order/train/javascript

//description: Your task is to make a function that can take any non-negative integer as a argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.



function descendingOrder(n) {
  return +n.toString()
    .split('')
    .sort()
    .reverse()
    .join('')
}


console.log(descendingOrder(0), 0)
console.log(descendingOrder(123), 321)
console.log(descendingOrder(1), 1)
console.log(descendingOrder(123456789), 987654321)