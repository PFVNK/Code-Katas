//Fake Binary   https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript

//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.



function fakeBin(x) {
  let binary = []
  for (i = 0; i < x.length; i++) {
    let num = x[i]
    if (num >= 5) {
      binary.push(1)
    } else if (num < 5) {
      binary.push(0)
    }
  }
  return binary.join('')
}

function fakeBin(x) {
  return [...x].map(num => num >= 5 ? 1 : 0).join('')
}

let fakeBin = x => [...x].map(num => num >= 5 ? 1 : 0).join('')



console.log(fakeBin('45385593107843568'), '01011110001100111');
console.log(fakeBin('509321967506747'), '101000111101101');
console.log(fakeBin('366058562030849490134388085'), '011011110000101010000011011');