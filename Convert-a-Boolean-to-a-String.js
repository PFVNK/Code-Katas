//Convert a Boolean to a String   https://www.codewars.com/kata/551b4501ac0447318f0009cd/train/javascript

//Implement a function which convert the given boolean value into its string representation.



function booleanToString(b) {
  return b.toString()
}

function booleanToString(b) {
  return '' + b
}

let booleanToString = b => String(b)

let booleanToString = b => `${b}`


console.log(booleanToString(true), "true");
console.log(booleanToString(false), "false");