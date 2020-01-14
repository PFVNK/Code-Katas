//Basic-Math  https://www.codewars.com/kata/5809b62808ad92e31b000031/train/javascript

//description: In this kata, you will do addition and subtraction on a given string. The return value must be also a string.



function calculate(str) {
  str = str.replace(/plus/g, '+')
  str = str.replace(/minus/g, '-')
  return eval(str).toString()
}

function calculate(str) {
  return eval(str.replace(/plus/gi, '+').replace(/minus/gi, '-')).toString();
}


console.log(calculate("1plus2plus3plus4"), '10');
console.log(calculate('1minus2minus3minus4'), '-8');
console.log(calculate('1plus2plus3minus4'), '2');