//dashatize-it    https://www.codewars.com/kata/dashatize-it/train/javascript

//desription: Given a number, return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark.



// function dashatize(num) {
//   let numbers = [...num + ''].map(n => +n)
//   let dashed = numbers.map((number, index) => number % 2 !== 0 && index !== 0 && index !== number.length - 1 ? `-${number}-` : number)
//   return dashed.join('')
// }

function dashatize(num) {
  num = Math.abs(num)
  let numbers = [...num + ''].map(n => +n)
  let dashed = []

  console.log(numbers[numbers.length - 1])

  if (isNaN(num)) {
    return 'NaN'
  }

  if (numbers.length < 2) {
    return Math.abs(num).toString()
  }

  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0 && numbers[i - 1] % 2 === 0) {
      dashed.push(`-${numbers[i]}-`)
    } else if (numbers[i] % 2 !== 0 && numbers[i - 1] % 2 !== 0) {
      dashed.push(`${numbers[i]}-`)
    } else if (numbers[i] % 2 === 0) {
      dashed.push(numbers[i])
    }
  }

  if (dashed.join('').endsWith('-')) {
    let answer = dashed.join('')
    return answer.slice(0, answer.length - 1)
  } else {
    return dashed.join('')
  }
}



console.log(dashatize(274), "2-7-4");
console.log(dashatize(5311), "5-3-1-1");
console.log(dashatize(86320), "86-3-20");
console.log(dashatize(974302), "9-7-4-3-02");

console.log(dashatize(NaN), "NaN");
console.log(dashatize(0), "0");
console.log(dashatize(-1), "1");
console.log(dashatize(-28369), "28-3-6-9");