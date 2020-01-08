//double-char  https://www.codewars.com/kata/double-char/train/javascript

//description: Given a string, you have to return a string in which each character (case-sensitive) is repeated once.



function doubleChar(str) {
  let doubled = []
  for (i = 0; i < str.length; i++) {
    let letter = str[i]
    doubled.push(`${letter}${letter}`)
  }

  return doubled.join('')
}

function doubleChar(str) {
  let doubled = ''

  for (i = 0; i < str.length; i++) {
    let letter = str[i]
    doubled += `${letter}${letter}`
  }

  return doubled
}


console.log(doubleChar("abcd"), "aabbccdd");
console.log(doubleChar("Adidas"), "AAddiiddaass");
console.log(doubleChar("1337"), "11333377");
console.log(doubleChar("illuminati"), "iilllluummiinnaattii");
console.log(doubleChar("123456"), "112233445566");
console.log(doubleChar("%^&*("), "%%^^&&**((");