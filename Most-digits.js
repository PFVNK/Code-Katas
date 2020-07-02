//Most digits  https://www.codewars.com/kata/58daa7617332e59593000006/train/javascript

//Find the number with the most digits. If two numbers in the argument array have the same number of digits, return the first one in the array.



function findLongest(array) {
  let sortArray = [...array].sort((a, b) => a - b)

  let greatestLength = sortArray[sortArray.length - 1].toString().length

  for (i = 0; i < array.length; i++) {
    let number = array[i].toString().length
    if (number === greatestLength) {
      return array[i]
    }
  }
}




console.log(findLongest([1, 10, 100]), 100)
console.log(findLongest([9000, 8, 800]), 9000)
console.log(findLongest([8, 900, 500]), 900)