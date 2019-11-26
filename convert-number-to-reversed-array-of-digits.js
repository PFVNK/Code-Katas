//convert-number-to-reversed-array-of-digits    https://www.codewars.com/kata/convert-number-to-reversed-array-of-digits/train/javascript

//description: You have to return the digits of this number within an array in reverse order.



function digitize(n) {
  return Array.from(n.toString()).map(Number).reverse()
}

let digitize = n => Array.from(n.toString()).map(Number).reverse()



console.log(digitize(35231), [1, 3, 2, 5, 3]);