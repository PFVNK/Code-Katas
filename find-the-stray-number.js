//find-the-stray-number   https://www.codewars.com/kata/find-the-stray-number/train/javascript

//description: Complete the method which accepts such an array, and returns that single different number.



function stray(numbers) {
  let unique = {}
  for (i = 0; i < numbers.length; i++) {
    let number = numbers[i]
    if (unique[number]) {
      unique[number]++
    } else {
      unique[number] = 1
    }
  }

  for (const [number, amount] of Object.entries(unique)) {
    if (amount === 1) {
      return number
    }
  }
}



console.log(stray([1, 1, 2]), 2);
console.log(stray([17, 17, 3, 17, 17, 17, 17]), 3);