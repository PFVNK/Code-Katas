//break-camelcase   https://www.codewars.com/kata/break-camelcase/train/javascript

//description: Complete the solution so that the function will break up camel casing, using a space between words.



function solution(string) {
  string = string.split('')
  let splitCamelStr = []

  for (i = 0; i < string.length; i++) {
    let letter = string[i]
    if (letter === letter.toUpperCase()) {
      splitCamelStr.push(' ' + letter)

    } else {
      splitCamelStr.push(letter)
    }
  }

  return splitCamelStr.join('')
}

function solution(string) {
  return string.split('').map(letter => letter === letter.toUpperCase() ? ' ' + letter : letter).join('')
}

let solution = string => [...string]
  .map(letter => letter === letter.toUpperCase() ? ' ' + letter : letter)
  .join('')

console.log(solution('camelCasing'), 'camel Casing')