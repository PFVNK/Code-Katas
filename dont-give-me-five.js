//dont-give-me-five   https://www.codewars.com/kata/dont-give-me-five/train/javascript

//description: In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it



function dontGiveMeFive(start, end) {
  let allNums = []
  let filteredNums = 0
  for (i = start; i < end + 1; i++) {
    allNums.push(i)
  }

  for (i = 0; i < allNums.length; i++) {
    let number = allNums[i]

    if (number !== 5 && number !== 10 && number / 5 !== parseInt(number) || number === 1) {
      filteredNums += 1
    }
  }

  return filteredNums
}



console.log(dontGiveMeFive(1, 9), 8);
console.log(dontGiveMeFive(4, 17), 12);