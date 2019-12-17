//palindrome-chain-length   https://www.codewars.com/kata/palindrome-chain-length/train/javascript



var palindromeChainLength = function (n) {
  var x = parseInt(("" + n).split('').reverse().join(''));
  if (n != x) {
    return 1 + palindromeChainLength(n + x);
  }
  return 0;
};



console.log(palindromeChainLength(87), 4)
console.log(palindromeChainLength(4884), 1)
