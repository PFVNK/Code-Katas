//Stringy-Strings   https://www.codewars.com/kata/563b74ddd19a3ad462000054/train/javascript

//write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.



function stringy(size) {
  let binary = ''

  for (i = 0; i < size / 2; i++) {
    binary += 1
    binary += 0
  }

  return size % 2 === 0 ? binary : binary.slice(0, -1)
}




console.log(stringy(4), '1010')
console.log(stringy(15), '1010')