//Equal Sides Of An Array  https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript

//Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N.



function findEvenIndex(arr) {
  let left = 0
  let right = 0

  for (let i = 0; i <= arr.length; i++) {
    if (i === 0) left = 0
    left = arr.slice(0, i).reduce((acc, num) => acc += num, 0)
    right = arr.slice(i + 1, arr.length).reduce((acc, num) => acc += num, 0)

    if (left === right) {
      return i
    }
  }

  return -1
}



console.log(findEvenIndex(
  [1, 2, 3, 4, 3, 2, 1]), 3, "The array was: [1,2,3,4,3,2,1] \n");
console.log(findEvenIndex(
  [1, 100, 50, -51, 1, 1]), 1, "The array was: [1,100,50,-51,1,1] \n");
console.log(findEvenIndex(
  [1, 2, 3, 4, 5, 6]), -1, "The array was: [1,2,3,4,5,6] \n");
console.log(findEvenIndex(
  [20, 10, 30, 10, 10, 15, 35]), 3, "The array was: [20,10,30,10,10,15,35] \n");