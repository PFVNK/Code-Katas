//Testing 1-2-3  https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript

//Write a function which takes a list of strings and returns each line prepended by the correct number.



function number(array) {
  if (array.length === 0) { return array }

  return array.map((str, index) => `${index + 1}: ${str}`)
}



console.log(number([]), [], 'Empty array should return empty array');
console.log(number(["a", "b", "c"]), ["1: a", "2: b", "3: c"], 'Return the correct line numbers');  