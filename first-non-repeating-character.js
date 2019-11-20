//first-non-repeating-character   https://www.codewars.com/kata/first-non-repeating-character/train/javascript

//description: Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.




const firstNonRepeatingLetter = s => {
  const index = s
    .toLowerCase()
    .split('')
    .findIndex((char, _, s) => s.indexOf(char) === s.lastIndexOf(char))

  return index === -1 ? '' : s[index]
}



// console.log(firstNonRepeatingLetter('a'), 'a');
// console.log(firstNonRepeatingLetter('stress'), 't');
// console.log(firstNonRepeatingLetter('moonmen'), 'e');
console.log(firstNonRepeatingLetter('aaaaaaaa'), '');
console.log(firstNonRepeatingLetter('sTreSS'), 'T');
console.log(firstNonRepeatingLetter('Go hang a salami, Im a lasagna hog!'), ',');
// console.log(firstNonRepeatingLetter('hello world, eh?'), 'w');
console.log(firstNonRepeatingLetter('∞§ﬁ›ﬂ∞§'), 'ﬁ');