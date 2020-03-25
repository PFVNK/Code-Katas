//Correct-the-mistakes-of-the-character-recognition-software  https://www.codewars.com/kata/577bd026df78c19bca0002c0/train/javascript

//Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1



function correct(string) {
  let correction = {
    5: 'S',
    0: 'O',
    1: 'I'
  }

  let correct = []

  for (i = 0; i < string.length; i++) {
    let letter = string[i]

    if (letter in correction) {
      correct.push(correction[letter])
    } else {
      correct.push(letter)
    }
  }

  return correct.join('')
}

function correct(string) {
  let correction = {
    5: 'S',
    0: 'O',
    1: 'I'
  }

  return [...string].map(x => x in correction ? correction[x] : x).join('')
}


console.log(correct("L0ND0N"), "LONDON");
console.log(correct("DUBL1N"), "DUBLIN");
console.log(correct("51NGAP0RE"), "SINGAPORE");
console.log(correct("BUDAPE5T"), "BUDAPEST");
console.log(correct("PAR15"), "PARIS");