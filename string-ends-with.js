//string-ends-with   https://www.codewars.com/kata/string-ends-with/train/javascript

//description: Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string)



function solution(str, ending) {
  return str.slice(-ending.length) === ending ? true : false
}


let solution = (str, ending) => str.slice(-ending.length) === ending && !str || !ending ? true : false



console.log(solution('abcde', 'cde'), true)
console.log(solution('abcde', 'abc'), false)