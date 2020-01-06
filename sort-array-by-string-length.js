//sort-array-by-string-length  https://www.codewars.com/kata/sort-array-by-string-length/train/javascript

//desccription: Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.



function sortByLength(array) {
  return array.sort(function (a, b) {
    return a.length - b.length
  })
};

let sortByLength = array => array.sort((a, b) => a.length - b.length)




console.log(sortByLength(["Beg", "Life", "I", "To"]), ["I", "To", "Beg", "Life"]);
console.log(sortByLength(["", "Moderately", "Brains", "Pizza"]), ["", "Pizza", "Brains", "Moderately"]);
console.log(sortByLength(["Longer", "Longest", "Short"]), ["Short", "Longer", "Longest"]);