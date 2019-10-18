// VOWEL COUNT  https://www.codewars.com/kata/vowel-count/train/javascript

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, and u as vowels for this Kata.

// The input string will only consist of lower case letters and/or spaces.


function getCount(str) {
  var vowelsCount = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u']
  str = str.split('')
  for (let i = 0; i < vowels.length; i++) {
    for (j = 0; j < str.length; j++) {
      if (vowels[i] === str[j]) {
        vowelsCount += 1
      }
    }
  }

  return vowelsCount;
}

console.log(getCount("abracadabra"), 5)