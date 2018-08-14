// SUM OF DIGITS / DIGITAL ROOT  www.codewars.com/kata/sum-of-digits-slash-digital-root/train/javascript

// In this kata, you must create a digital root function.

// A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. 
// If that value has two digits, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.


function digital_root(n) {
    var fn = function() {
      return String(n).split('').map(Number).reduce((i,j) => i+j)
    }
   return  fn() > 9 ? digital_root(fn()) : fn()
}