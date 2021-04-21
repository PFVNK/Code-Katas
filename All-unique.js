//All unique



function hasUniqueChars(str) {
  let letters = {}

  for (let i = 0; i < str.length; i++) {
    let letter = str[i]
    if (letters[letter]) {
      letters[letter]++
    } else {
      letters[letter] = 1
    }
  }

  for (const [key, value] of Object.entries(letters)) {
    if (value > 1) {
      return false
    } else {
      return true
    }
  }
}



console.log(hasUniqueChars("  nAa"), false)
console.log(hasUniqueChars("abcdef"), true)
console.log(hasUniqueChars("aA"), true)
console.log(hasUniqueChars("++-"), false)
