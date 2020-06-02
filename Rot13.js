//Rot13   https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript

//ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher



function rot13(message) {
  let splitMessage = message.split('')
  let lowerCase = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnop'.split('');
  let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOP'.split('');

  for (i = 0; i < splitMessage.length; i++) {
    let letter = ''
    if (splitMessage[i].match(/[a-z]/)) {
      letter = lowerCase.indexOf(splitMessage[i])
      splitMessage[i] = lowerCase[letter + 13]
    } else if (splitMessage[i].match(/[A-Z]/)) {
      letter = upperCase.indexOf(splitMessage[i])
      splitMessage[i] = upperCase[letter + 13]
    }
  }

  return splitMessage.join('')
}



console.log(rot13('test'), 'grfg')
console.log(rot13('Test'), 'Grfg')