// get-the-middle-character  https://www.codewars.com/kata/get-the-middle-character/train/javascript

// description: You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.


function getMiddle(s) {
  let string = s.split('')
  if (string.length % 2 === 0) {
    let middle = string.length / 2 - 1
    string = string.splice(middle)
    return string.splice(0, 2).join('')
  }
  if (Math.abs(string.length % 2) == 1) {
    let middle = string.length / 2
    return string[Math.floor(middle)]
  }
}


console.log(getMiddle("test"), "es");
console.log(getMiddle("testing"), "t");
console.log(getMiddle("middle"), "dd");
console.log(getMiddle("A"), "A");