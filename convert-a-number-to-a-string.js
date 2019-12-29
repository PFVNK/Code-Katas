//convert-a-number-to-a-string   https://www.codewars.com/kata/convert-a-number-to-a-string/train/javascript

//description: We need a function that can transform a number into a string.


function numberToString(num) {
  return num + ''
}

function numberToString(num) {
  return num.toString()
}



console.log(numberToString(67), '67');
console.log(numberToString(23), '23');
console.log(numberToString(666), '666');