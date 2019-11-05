//disemvowel-trolls  https://www.codewars.com/kata/disemvowel-trolls/train/javascript

//description: Your task is to write a function that takes a string and return a new string with all vowels removed.


function disemvowel(str) {
  return [...str].map(x => x.replace(/[aeiouAEIOU]/g, '')).join('')
}

let disemvowel = str => [...str].map(x => x.replace(/[aeiouAEIOU]/g, '')).join('')


console.log(disemvowel("This website is for losers LOL!"),
  "Ths wbst s fr lsrs LL!")