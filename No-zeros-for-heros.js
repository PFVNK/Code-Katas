//No zeros for heros   https://www.codewars.com/kata/570a6a46455d08ff8d001002/train/javascript

//Numbers ending with zeros are boring.
// They might be fun in your world, but not here.
// Get rid of them.Only the ending ones.



function noBoringZeros(n) {
  let splitNum = n.toString().split('')
  let noZero

  if (n === 0) { return 0 }

  for (i = splitNum.length - 1; i >= 0; i--) {
    if (splitNum[i] > 0) {
      noZero = splitNum.slice(0, i + 1).join('')
      break
    }
  }

  return noZero
}



console.log(noBoringZeros(1450), 145)
console.log(noBoringZeros(960000), 96)
console.log(noBoringZeros(1050), 105)
console.log(noBoringZeros(-1050), -105)
console.log(noBoringZeros(-105), -105)
console.log(noBoringZeros(0), 0)