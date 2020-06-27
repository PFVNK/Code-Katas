//Kebabize https://www.codewars.com/kata/57f8ff867a28db569e000c4a/train/javascript

//Modify the kebabize function so that it converts a camel case string into a kebab case.



function kebabize(str) {
  str = str.split('').filter(val => isNaN(val))

  let kabab = []

  for (i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      kabab.push('-')
      kabab.push(str[i].toLowerCase())
    } else {
      kabab.push(str[i])
    }
  }

  return kabab[0] === '-' ? kabab.slice(1).join('') : kabab.join('')
}



console.log(kebabize('myCamelCasedString'), 'my-camel-cased-string');
console.log(kebabize('myCamelHas3Humps'), 'my-camel-has-humps');
console.log(kebabize('SO2Kc'), 's-o-kc');