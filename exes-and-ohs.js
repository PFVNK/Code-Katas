//exes-and-ohs  https://www.codewars.com/kata/exes-and-ohs/train/javascript

//description: Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.


function XO(str) {
  let x = 0
  let o = 0

  str = str.toLowerCase().split('')

  str.forEach(char => {
    if (char === 'x') {
      x += 1
    }
    if (char === 'o') {
      o += 1
    }
  })

  if (x === o) {
    return true
  } else {
    return false
  }
}



console.log(XO('xo'), true);
console.log(XO("xxOo"), true);
console.log(XO("xxxm"), false);
console.log(XO("Oo"), false);
console.log(XO("ooom"), false);