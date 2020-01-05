//find-the-missing-letter  https://www.codewars.com/kata/find-the-missing-letter/train/javascript

//desription: Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.



function findMissingLetter(array) {
  array = array.join('')

  for (i = 0; i < array.length; i++) {
    if (array.charCodeAt(i + 1) - array.charCodeAt(i) !== 1) {
      return String.fromCharCode(array.charCodeAt(i) + 1)
    }
  }
}


console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']), 'e');
// console.log(findMissingLetter(['O', 'Q', 'R', 'S']), 'P');