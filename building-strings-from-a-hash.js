//building-strings-from-a-hash   https://www.codewars.com/kata/building-strings-from-a-hash/train/javascript

//description: Complete the solution so that it takes the object passed in and generates a human readable string from its key/value pairs. 



function solution(pairs) {
  let newStr = ''

  for ([key, value] of Object.entries(pairs)) {
    newStr += `${key} = ${value},`
  }

  return newStr.slice(0, -1)
}

function solution(pairs) {
  return Object.entries(pairs).map((key, value) => `${key[0]} = ${value},`).join('').slice(0, pairs.length - 1)
}

let solution = pairs => Object.entries(pairs)
  .map((key, value) => `${key[0]} = ${value},`)
  .join('')
  .slice(0, pairs.length - 1)



console.log(solution({ a: 1, b: '2' }), "a = 1,b = 2")