//abbreviate-a-two-word-name   https://www.codewars.com/kata/abbreviate-a-two-word-name/train/javascript

//description: Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.



function abbrevName(name) {
  name = name.split(' ')
  return `${name[0].charAt(0)}.${name[1].charAt(0)}`
}

function abbrevName(name) {
  return [...name].map(x => x === x.toUpperCase() && x !== ' ' ? `${x}.` : '').join('').slice(0, -1)
}

function abbrevName(name) {
  return [...name].filter(x => x === x.toUpperCase()).join('').replace(' ', '.')
}

function abbrevName(name) {
  return name.split(' ').map(x => `${x.charAt()}.`).join('').slice(0, -1)
}

let abbrevName = name => name.split(' ')
  .map(x => `${x.charAt()}.`)
  .join('')
  .slice(0, -1)


console.log(abbrevName("Sam Harris"), "S.H");
console.log(abbrevName("Patrick Feenan"), "P.F");
console.log(abbrevName("Evan Cole"), "E.C");
console.log(abbrevName("P Favuzzi"), "P.F");
console.log(abbrevName("David Mendieta"), "D.M");