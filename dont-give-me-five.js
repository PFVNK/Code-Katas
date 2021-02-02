//dont-give-me-five   https://www.codewars.com/kata/dont-give-me-five/train/javascript


function dontGiveMeFive(start, end) {
  let allNums = []
  let filteredNums = 0
  for (i = start; i < end + 1; i++) {
    allNums.push(i)
  }

  for (i = 0; i < allNums.length; i++) {
    let number = allNums[i]

    if (!number.toString().split('').includes('5')) {
      filteredNums += 1
    }
  }

  return filteredNums
}


console.log(dontGiveMeFive(1, 9), 8);
console.log(dontGiveMeFive(4, 17), 12);
console.log(dontGiveMeFive(1, 90), 72);