//Sort-the-Gift-Code  https://www.codewars.com/kata/52aeb2f3ad0e952f560005d3/train/javascript

//description: Write a function called sortGiftCode/sort_gift_code/SortGiftCode that accepts a string containing up to 26 unique alphabetical characters, and returns a string containing the same characters in alphabetical order.



function sortGiftCode(code) {
  return code.split('').sort().join('')
}

let sortGiftCode = code => code
  .split('')
  .sort()
  .join('')



console.log(sortGiftCode('abcdef'), 'abcdef');
console.log(sortGiftCode('pqksuvy'), 'kpqsuvy');
console.log(sortGiftCode('zyxwvutsrqponmlkjihgfedcba'), 'abcdefghijklmnopqrstuvwxyz');