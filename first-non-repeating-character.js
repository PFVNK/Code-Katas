//first-non-repeating-character   https://www.codewars.com/kata/first-non-repeating-character/train/javascript

//description: Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.



function firstNonRepeatingLetter(s) {
  let letters = {}
  let unique = []
  s = s.match(/[a-zA-Z∞§ﬁ›ﬂ∞§0-9,]/g)

  for (i = 0; i < s.length; i++) {
    let letter = s[i]
    if (letters[letter]) {
      letters[letter]++
    } else {
      letters[letter] = 1
    }
  }

  letters = Object.entries(letters)

  for (const [letter, count] of letters) {
    if (count === 1) {
      unique.push(letter)
    }
  }

  if (unique.length === 0) {
    return ''
  }

  if (!unique[0].match(/[a-zA-Z]/)) {
    return unique[0]
  }

  let upperCase = unique.filter(x => x === x.toUpperCase())

  console.log(upperCase)

  if (upperCase.length > 0) {
    return upperCase.shift()
  } else if (unique.length > 0) {
    return unique.shift()
  } else {
    return ''
  }
}


// console.log(firstNonRepeatingLetter('a'), 'a');
// console.log(firstNonRepeatingLetter('stress'), 't');
// console.log(firstNonRepeatingLetter('moonmen'), 'e');
console.log(firstNonRepeatingLetter('aaaaaaaa'), '');
console.log(firstNonRepeatingLetter('sTreSS'), 'T');
console.log(firstNonRepeatingLetter('Go hang a salami, Im a lasagna hog!'), ',');
// console.log(firstNonRepeatingLetter('hello world, eh?'), 'w');
console.log(firstNonRepeatingLetter('∞§ﬁ›ﬂ∞§'), 'ﬁ');