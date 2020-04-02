//Short-Long-Short   https://www.codewars.com/kata/50654ddff44f800200000007/train/javascript

//Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( length 0 ).



function solution(a, b) {
  return a.length > b.length ? `${b}${a}${b}` : `${a}${b}${a}`
}

let solution = (a, b) => a.length > b.length ? `${b}${a}${b}` : `${a}${b}${a}`



console.log(solution('45', '1'), '1451');
console.log(solution('13', '200'), '1320013');
console.log(solution('Soon', 'Me'), 'MeSoonMe');
console.log(solution('U', 'False'), 'UFalseU');