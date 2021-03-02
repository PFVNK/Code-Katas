//Palindrome Strings



function isPalindrome(line) {
  if (line !== Number(line)) {
    if (line.split('').reverse().join('') === line) {
      return true
    }
  }

  if (line === Number(line)) {
    if (+line.toString().split('').reverse().join('') === line) {
      return true
    }
  }

  return false
}



console.log(isPalindrome("anna"), true);
console.log(isPalindrome("walter"), false);
console.log(isPalindrome(12321), true);
console.log(isPalindrome(123456), false);
