//Is-Integer-Array.js  https://www.codewars.com/kata/52a112d9488f506ae7000b95/train/javascript

//description: 
// returns true / True if every element in an array is an integer or a float with no decimals.
// returns true / True if array is empty.
// returns false / False for every other input.




function isIntArray(arr) {

}



console.log(isIntArray([]), true, "Input: []");
console.log(isIntArray([1, 2, 3, 4]), true, "Input: [1, 2, 3, 4]");
console.log(isIntArray([1, 2, 3, NaN]), false, "Input: [1, 2, 3, NaN]");
