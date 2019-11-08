//convert-boolean-values-to-strings-yes-or-no  https://www.codewars.com/kata/convert-boolean-values-to-strings-yes-or-no/train/javascript

//description: Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.



function boolToWord(bool) {
  if (bool === true) {
    return 'Yes'
  } else {
    return 'No'
  }
}

let boolToWord = bool => bool ? 'Yes' : 'No'



console.log(boolToWord(true), 'Yes')
console.log(boolToWord(false), 'No')