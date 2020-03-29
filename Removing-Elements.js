//Removing-Elements   https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/train/javascript

//Take an array and remove every second element out of that array. Always keep the first element and start removing with the next element.



function removeEveryOther(arr) {
  let odds = []

  for (i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      odds.push(arr[i])
    }
  }

  return odds
}

function removeEveryOther(arr) {
  return arr.filter((element, index) => index % 2 === 0)
}

let removeEveryOther = arr => arr.filter((element, index) => index % 2 === 0)



console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']), ['Hello', 'Hello Again']);
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 3, 5, 7, 9]);
console.log(removeEveryOther([[1, 2]]), [[1, 2]]);
console.log(removeEveryOther([['Goodbye'], { 'Great': 'Job' }]), [['Goodbye']]);