//Is it a palindrome?



// function isPalindrome(x) {
//   return x === x.split('').reverse().join('')
// }

const isPalindrome = x => x === x.split('').reverse().join('')



console.log(isPalindrome("a"), true)
console.log(isPalindrome("aba"), true)
console.log(isPalindrome("hello"), false)

