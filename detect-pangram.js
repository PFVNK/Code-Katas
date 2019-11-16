//detect-pangram   https://www.codewars.com/kata/detect-pangram/train/javascript

//description: Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.



function isPangram(string) {
  let unique = []
  string = string.toLowerCase().match(/[a-zA-Z]/g)

  for (i = 0; i < string.length; i++) {
    let letter = string[i]
    if (!unique.includes(letter)) {
      unique.push(letter)
    }
  }

  if (unique.length === 26) {
    return true
  } else {
    return false
  }
}


function isPangram(string) {
  let unique = []

  string = string.toLowerCase().match(/[a-zA-Z]/g)

  string.map(x => !unique.includes(x) ? unique.push(x) : x)

  return unique.length === 26 ? true : false
}


var string = "The quick brown fox jumps over the lazy dog."
console.log(isPangram(string), true)
var string = "This is not a pangram."
console.log(isPangram(string), false)