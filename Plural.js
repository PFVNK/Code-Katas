//Plural  https://www.codewars.com/kata/52ceafd1f235ce81aa00073a/train/javascript

//We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not.



function plural(n) {
  if (n === 1) {
    return false
  }

  return true
}

const plural = n => n === 1 ? false : true


console.log(plural(0), true, "Plural for 0");
console.log(plural(0.5), true, "Plural for 0.5");
console.log(plural(1), false, "Plural for 1");
console.log(plural(100), true, "Plural for 100");
console.log(plural(Infinity), true, "Plural for Infinity");