//Reverse List Order   https://www.codewars.com/kata/53da6d8d112bd1a0dc00008b/train/javascript

//In this kata you will create a function that takes in a list and returns a list with the reverse order.



function reverseList(list) {
  return list.reverse()
}

function reverseList(list) {
  let reverse = []

  for (i = list.length - 1; i >= 0; i--) {
    reverse.push(list[i])
  }

  return reverse
}

const reverseList = list => list.reverse()



console.log(reverseList([1, 2, 3, 4]), [4, 3, 2, 1]);
console.log(reverseList([3, 1, 5, 4]), [4, 5, 1, 3]);