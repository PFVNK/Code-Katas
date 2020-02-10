//altERnaTIng-cAsE   https://www.codewars.com/kata/56efc695740d30f963000557/train/javascript

//description: such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase.



String.prototype.toAlternatingCase = function () {
  let altArray = []

  for (i = 0; i < this.length; i++) {
    let letter = this[i]

    if (letter === letter.toUpperCase()) {
      altArray.push(letter.toLowerCase())
    } else {
      altArray.push(letter.toUpperCase())
    }
  }

  return altArray.join('')
}



console.log("hello world".toAlternatingCase(), "HELLO WORLD");
console.log("HELLO WORLD".toAlternatingCase(), "hello world");
console.log("hello WORLD".toAlternatingCase(), "HELLO world");
console.log("HeLLo WoRLD".toAlternatingCase(), "hEllO wOrld");
console.log("12345".toAlternatingCase(), "12345");
console.log("1a2b3c4d5e".toAlternatingCase(), "1A2B3C4D5E");
console.log("String.prototype.toAlternatingCase".toAlternatingCase(), "sTRING.PROTOTYPE.TOaLTERNATINGcASE");
console.log("Hello World".toAlternatingCase().toAlternatingCase(), "Hello World");