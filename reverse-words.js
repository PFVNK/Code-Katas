//reverse-words   https://www.codewars.com/kata/reverse-words/train/javascript

//descriptions: Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.



function reverseWords(str) {
  str = str.split(' ')
  let reverseStr = []

  for (i = 0; i < str.length; i++) {
    let reverse = str[i].split('').reverse().join('')
    reverseStr.push(reverse)
  }

  return reverseStr.join(' ')
}

let reverseWords = str => str.split(' ').map(x => x.split('').reverse().join(''))


console.log(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');
console.log(reverseWords('apple'), 'elppa');
console.log(reverseWords('a b c d'), 'a b c d');
console.log(reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');