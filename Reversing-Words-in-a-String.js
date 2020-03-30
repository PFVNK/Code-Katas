//Reversing-Words-in-a-String   https://www.codewars.com/kata/57a55c8b72292d057b000594/train/javascript

//You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some 



function reverse(string) {
  return string.split(' ').reverse().join(' ')
}

let reverse = string => string.split(' ').reverse().join(' ')



console.log(reverse('I am an expert at this'), 'this at expert an am I');
console.log(reverse('This is so easy'), 'easy so is This');
console.log(reverse('no one cares'), 'cares one no');
console.log(reverse(''), '');
console.log(reverse('CodeWars'), 'CodeWars');