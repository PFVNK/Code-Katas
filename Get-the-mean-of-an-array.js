//Get-the-mean-of-an-array   https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript

//All the students come to you and entreat you to calculate their average for them



function getAverage(marks) {
  let total = 0
  for (i = 0; i < marks.length; i++) {
    let number = marks[i]
    total += number
  }
  return Math.trunc(total / marks.length)
}



console.log(getAverage([2, 2, 2, 2]), 2);
console.log(getAverage([1, 2, 3, 4, 5,]), 3);
console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]), 1);