//Ordered Count of Characters



// var orderedCount = function (text) {
//   let unique = {}
//   let uniqueArr = []

//   for (let i = 0; i < text.length; i++) {
//     let letter = text[i]
//     if (unique[letter]) {
//       unique[letter]++
//     } else {
//       unique[letter] = 1
//     }
//   }

//   for (var letter in unique) {
//     uniqueArr.push([letter, unique[letter]])
//   }

//   return uniqueArr.sort((a, b) => {
//     a[0] - b[0] 
//   })
// }

var orderedCount = function (text) {
  // Implement me!
  const splitStr = text.split('');
  const str = [...new Set(splitStr)];

  let resultArr = [];

  for (let i = 0; i <= str.length - 1; i += 1) {
    resultArr.push([str[i], splitStr.filter((s) => s === str[i]).length]);
  }

  return resultArr;
}



console.log(
  orderedCount("abracadabra"), [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]])
console.log(
  orderedCount("Code Wars"), [['C', 1], ['o', 1], ['d', 1], ['e', 1], [' ', 1], ['W', 1], ['a', 1], ['r', 1], ['s', 1]])
console.log(
  orderedCount("233312"), [['2', 2], ['3', 3], ['1', 1]])
