//Substituting Variables Into Strings: Padded Numbers



function solution(value) {
  let diff = 5 - value.toString().length

  return `Value is ${Array(diff).fill(0).join('')}${value}`
}



console.log(solution(5), "Value is 00005")
