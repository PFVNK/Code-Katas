//Find the position!

let alphabet = 'abcdefghijklmnopqrstuvwxyz'

function position(letter) {
  return `Position of alphabet: ${alphabet.indexOf(letter) + 1}`
}



console.log(position("a"), "Position of alphabet: 1");
console.log(position("z"), "Position of alphabet: 26");
console.log(position("e"), "Position of alphabet: 5");
