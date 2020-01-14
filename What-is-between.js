//What-is-between  https://www.codewars.com/kata/55ecd718f46fba02e5000029/train/javascript

//description: Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.



function between(a, b) {
  let array = []

  for (i = a; i <= b; i++) {
    array.push(i)
  }

  return array
}



console.log(between(1, 4), [1, 2, 3, 4]);
console.log(between(-2, 2), [-2, -1, 0, 1, 2]);