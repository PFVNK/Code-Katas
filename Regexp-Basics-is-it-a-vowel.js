//Regexp-Basics-is-it-a-vowel   https://www.codewars.com/kata/567bed99ee3451292c000025/train/javascript

//description: Implement the function which should return true if given object is a vowel (meaning a, e, i, o, u), and false otherwise.



String.prototype.vowel = function () {
  let vowels = /^[aeiouAEIOU]+$/

  if (this.match(vowels) && this.length < 2) {
    return true
  } else {
    return false
  }
};



console.log(''.vowel(), false);
console.log('a'.vowel(), true);
console.log('E'.vowel(), true);
console.log('ou'.vowel(), false);
console.log('z'.vowel(), false);
console.log('lol'.vowel(), false);