//Adjacent repeated words in a string   https://www.codewars.com/kata/5245a9138ca049e9a10007b8/train/javascript

//Write a function that counts the number of sections repeating the same word (case insensitive). The occurence of two or more equal words next after each other count as one.



function countAdjacentPairs(searchString) {
  let stringArr = searchString.split(' ').map(x => x.toLowerCase())
  let pairCount = []


  for (let i = 0; i < stringArr.length; i++) {
    if (stringArr[i] === stringArr[i + 1]) {
      pairCount.push([stringArr[i], stringArr[i + 1]])
    }
  }

  console.log(pairCount)

  return pairCount.length
}



// console.log(countAdjacentPairs(
//   ''), 0, 'An empty string should return 0.')
// console.log(countAdjacentPairs(
//   'orange Orange kiwi pineapple apple'), 1, "Case should be ignored. countAdjacentPairs('orange Orange kiwi pineapple apple')")
console.log(countAdjacentPairs(
  'banana banana banana'), 1, "Once a word has been paired, it is ignored. countAdjacentPairs('banana banana banana')")
// console.log(countAdjacentPairs(
//   'banana banana banana terracotta banana terracotta terracotta pie!'), 2, "Once a word has been paired, it is ignored. Grab all pairs. countAdjacentPairs('banana banana banana terracotta banana terracotta terracotta pie!')")
// console.log(countAdjacentPairs(
//   'pineapple apple'), 0, "A pineapple is not an apple. countAdjacentPairs('pineapple apple')")