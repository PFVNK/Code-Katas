//Sum even numbers



function sumEvenNumbers(input) {
  let even = 0
  for (let i = 0; i < input.length; i++) {
    let num = input[i]
    if (num % 2 === 0 && num % 1 === 0) {
      even += num
    }
  }

  return even
}

function sumEvenNumbers(input) {
  return input.filter(num => num % 2 === 0).reduce((acc, num) => acc + num)
}



console.log(
  sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
  30
);
