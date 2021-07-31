//Character Frequency



function charFreq(message) {
  let split = message.split('')
  let unique = {}
  for (let i = 0; i < split.length; i++) {
    let letter = split[i]
    if (unique[letter]) {
      unique[letter]++
    } else {
      unique[letter] = 1
    }
  }

  return unique
}



console.log(
  charFreq("I like cats"), { 'a': 1, ' ': 2, 'c': 1, 'e': 1, 'I': 1, 'k': 1, 'l': 1, 'i': 1, 's': 1, 't': 1 });
