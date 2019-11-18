//split-strings   https://www.codewars.com/kata/split-strings/train/javascript

//description: Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').



function solution(str) {
  let doubles = []
  let first = 0
  let second = 1

  for (i = 0; i < str.length; i++) {
    while (second < str.length + 1) {
      let double = str[second] ? str[first].concat(str[second]) : str[first].concat('_')
      doubles.push(double)

      first += 2
      second += 2
    }
  }

  return doubles
}


// console.log(solution('abcdefghijklmnop'))
console.log(solution('dog'))
console.log(solution('heynow'))