//Vowel remover   https://www.codewars.com/kata/5547929140907378f9000039/train/javascript

//Create a function called shortcut to remove all the lowercase vowels in a given string.



function shortcut(string) {
  return string.replace(/[aeiou]/g, '')
}

const shortcut = string => string.replace(/[aeiou]/g, '')



console.log(shortcut('hello'), 'hll')
console.log(shortcut('how are you today?'), 'hw r y tdy?');
console.log(shortcut('complain'), 'cmpln');
console.log(shortcut('never'), 'nvr');