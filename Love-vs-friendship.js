//Love vs friendship



function wordsToMarks(string) {
  let alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let equation = []

  let splitStr = string.split('')
  for (let i = 0; i < splitStr.length; i++) {
    let letter = splitStr[i]
    equation.push(alpha.indexOf(letter) + 1)
  }

  return equation.reduce((acc, num) => acc + num)
}



console.log(wordsToMarks("attitude"), 100);
console.log(wordsToMarks("friends"), 75);
console.log(wordsToMarks("family"), 66);
console.log(wordsToMarks("selfness"), 99);
console.log(wordsToMarks("knowledge"), 96);
