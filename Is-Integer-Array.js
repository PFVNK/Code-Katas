//Is-Integer-Array.js  https://www.codewars.com/kata/52a112d9488f506ae7000b95/train/javascript

//description: 
// returns true / True if every element in an array is an integer or a float with no decimals.
// returns true / True if array is empty.
// returns false / False for every other input.




function isIntArray(arr) {
  if (arr.every((number) => !isNaN(number))) return true
  return false
}


function isIntArray(a) {
  if (!Array.isArray(a)) {
    return false;
  }
  for (var i = 0, l = a.length; i < l; i++) {
    var n = a[i];
    if (n !== ~~n) {
      return false;
    }
  }
  return true;
}

console.log(isIntArray([]), true);
console.log(isIntArray([1, 2, 3, 4]), true);
console.log(isIntArray([1, 2, 3, NaN]), false);
console.log(isIntArray(['-1']), false);
