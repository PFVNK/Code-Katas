//Decipher this! 



function decipherThis(str) {
  let splitStr = str.split(' ')
  let message = []

  for (let i = 0; i < splitStr.length; i++) {
    let word = splitStr[i]
    //get word with number removed
    let noNum = word.replace(/[0-9]/g, '')
    //switch second and last letter after number removed
    let switchLetter = noNum.length > 1 ? noNum[noNum.length - 1] + noNum.substring(1, noNum.length - 1) + noNum[0] : noNum
    //get numbers from word
    let matches = word.match(/(\d+)/g);
    //turn numbers into charcter
    let letter = String.fromCharCode(matches)
    message.push(letter + switchLetter)
  }

  return message.join(' ')
};



console.log(
  decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o'), 'Have a go at this and see how you do');
