//If you can read this...



function to_nato(words) {
  let nato = []
  let splitWord = words.split('')

  for (let i = 0; i < splitWord.length; i++) {
    let letter = splitWord[i].toLowerCase()

    if (letter.match(/[a-z]/i)) {
      nato.push(NATO[letter])
    } else if (letter !== ' ') {
      nato.push(letter)
    }
  }

  return nato.join(' ')
}



console.log(
  to_nato('If you can read'), "India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta");
console.log(
  to_nato('Did not see that coming'), "Delta India Delta November Oscar Tango Sierra Echo Echo Tango Hotel Alfa Tango Charlie Oscar Mike India November Golf");
console.log(
  to_nato('go for it!'), "Golf Oscar Foxtrot Oscar Romeo India Tango !");
