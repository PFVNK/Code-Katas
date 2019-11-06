//jaden-casing-strings   https://www.codewars.com/kata/jaden-casing-strings/train/javascript

//description: Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word.



String.prototype.toJadenCase = function () {
  str = str.split(' ')
  let final = ''

  for (let i = 0; i < str.length; i++) {
    let word = str[i]
    final += word.charAt(0).toUpperCase() + word.slice(1) + ' '
  }

  return final
};

String.prototype.toJadenCase = function () {
  return this.split(' ').map(x => x.charAt(0).toUpperCase() + x.slice(1)).join(' ')
};


var str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real");
