//Number-Of-Occurrences   https://www.codewars.com/kata/52829c5fe08baf7edc00122b/train/javascript

//description: Write a functionthat returns the number of occurrences of an element in an array.



// Array.prototype.numberOfOccurrences = function () {
//   let freq = {}

//   for (i = 0; i < this.length; i++) {
//     let number = this[i]

//     freq[number] = freq[number] ? freq[number] + 1 : 1
//   }

//   console.log(freq)

//   return Object.keys(freq).reduce((a, b) => freq[a] > freq[b] ? a : b)
// }

Array.prototype.numberOfOccurrences = function (n) {
  return this.filter((value) => value == n).length
}



var arr = [4, 0, 0, 0, 4];
console.log(arr.numberOfOccurrences(4), 2);