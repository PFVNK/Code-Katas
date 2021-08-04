//All unique



// function hasUniqueChars(str) {
//   let letters = {}

//   for (let i = 0; i < str.length; i++) {
//     let letter = str[i]
//     if (letters[letter]) {
//       letters[letter]++
//     } else {
//       letters[letter] = 1
//     }
//   }

//   console.log(letters)

//   for (const [key, value] of Object.entries(letters)) {
//     if (value > 1) {
//       return false
//     } else {
//       return true
//     }
//   }
// }

function hasUniqueChars(str) {
  var unique = {};
  for (var i = 0; i < str.length; i++) {
    if (unique[str[i]] != null) {
      unique[str[i]] = 1;
      return false;
    } else {
      unique[str[i]] = 0;
    }
  }
  return true;
}



console.log(hasUniqueChars("  nAa"), false)
console.log(hasUniqueChars("abcdef"), true)
console.log(hasUniqueChars("aA"), true)
console.log(hasUniqueChars("++-"), false)
