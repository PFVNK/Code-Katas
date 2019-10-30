// Convert string to camel case  https://www.codewars.com/kata/convert-string-to-camel-case/train/javascript

function toCamelCase(str) {
  let strCamelCase = '';

  for (var i = 0; i < str.length; i++) {
    let elem = str[i];
    if (elem === '-' || elem === '_') {
      strCamelCase += str[i + 1].toUpperCase()

      i++
    } else {
      strCamelCase += elem;
    }
  }
  return strCamelCase;
}


console.log(toCamelCase(''), '', "An empty string was provided but not returned")
console.log(toCamelCase("the_stealth_warrior"), "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
console.log(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
console.log(toCamelCase("A-B-C"), "ABC", "toCamelCase('A-B-C') did not return correct value")