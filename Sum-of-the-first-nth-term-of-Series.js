//Sum of the first nth term of Series  https://www.codewars.com/kata/555eded1ad94b00403000071

//Your task is to write a function which returns the sum of following series upto nth term(parameter).



function SeriesSum(n) {
  var sum = 0;
  for (var i = 0; i < n; i++) {
    sum += 1 / (3 * i + 1);
  }
  return sum.toFixed(2);
}



console.log(SeriesSum(1), "1.00")
console.log(SeriesSum(2), "1.25")
console.log(SeriesSum(3), "1.39")
console.log(SeriesSum(4), "1.49")