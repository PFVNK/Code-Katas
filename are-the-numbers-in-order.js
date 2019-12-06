//are-the-numbers-in-order   https://www.codewars.com/kata/are-the-numbers-in-order/train/javascript

//description: In this Kata, your function receives an array of integers as input. Your task is to determine whether the numbers are in ascending order.



function inAscOrder(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] >= arr[i + 1]) {
      return false
    }
  }

  return true
}


console.log(inAscOrder([1, 2, 4, 7, 19]), 'The list of numbers "1, 2, 4, 7, 19" is in ascending order');
console.log(inAscOrder([1, 2, 3, 4, 5]), 'The list of numbers "1, 2, 3, 4, 5" is in ascending order');
console.log(!inAscOrder([1, 6, 10, 18, 2, 4, 20]), 'The list of numbers "1, 6, 10, 18, 2, 4, 20" is not in ascending order');
console.log(!inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1]), 'The list of numbers "9, 8, 7, 6, 5, 4, 3, 2, 1" is in DESCENDING order not ascending order');