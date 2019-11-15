//reversed-strings   https://www.codewars.com/kata/reversed-strings/train/javascript

//description: Complete the solution so that it reverses the string value passed into it. 



function solution(str) {
  return str.split('').reverse().join('')
}

let solution = str => str.split('').reverse().join('')



console.log(solution('world') == 'dlrow')