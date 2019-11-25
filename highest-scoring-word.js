//highest-scoring-word   https://www.codewars.com/kata/highest-scoring-word/train/javascript

//description: Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.



function high(x) {
  let alphabet = new Array(26).fill(1).map((_, i) => String.fromCharCode(97 + i))
  let numbers = [...Array(26).keys()].map(x => ++x)
  let alphaNum = []

  for (i = 0; i < x.length; i++) {
    let letter = x[i]

    for (j = 0; j < alphabet.length; j++) {
      let alphaLetter = alphabet[j]

      if (alphaLetter === letter) {
        let alphaIndex = alphabet.indexOf(alphaLetter)

        alphaNum.push(numbers[alphaIndex])
      }
    }
  }

  return alphaNum.reduce((a, b) => a + b)
}

// function high(x) {
//   let alphabet = new Array(26).fill(1).map((_, i) => String.fromCharCode(97 + i))
//   let numbers = [...Array(26).keys()].map(x => ++x)
//   let splitStr = x.split(' ')

//   for (i = 0; i < splitStr.length; i++) {
//     console.log([splitStr[i]])
//   }


// }


// console.log(high('man i need a taxi up to ubud'), 'taxi');
// console.log(high('what time are we climbing up the volcano'), 'volcano');
console.log(high('take me to semynak'), 'semynak');  