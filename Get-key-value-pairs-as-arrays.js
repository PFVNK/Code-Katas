//Get-key-value-pairs-as-arrays   https://www.codewars.com/kata/515dfd2f1db09667a0000003/train/javascript

//description: Complete the keysAndValues function so that it takes in an object and returns the keys and values as separate arrays.



function keysAndValues(data) {
  return [Object.keys(data), Object.values(data)]
}

let keysAndValues = data => [Object.keys(data), Object.values(data)]



console.log(keysAndValues({ a: 1, b: 2, c: 3 }), [['a', 'b', 'c'], [1, 2, 3]])