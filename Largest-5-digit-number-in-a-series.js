//Largest-5-digit-number-in-a-series   https://www.codewars.com/kata/51675d17e0c1bed195000001/train/javascript

//Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given.



function solution(digits) {
  let number = String(digits)
  let greatest = +number.slice(0, 5)
  for (i = 1; i < number.length; i++) {
    if (number.slice(i, i + 5) > greatest) {
      greatest = +number.slice(i, i + 5)
    }
  }

  return greatest
}



console.log(solution(283910), 91)
console.log(solution(1234567890), 67890)