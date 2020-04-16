//Write Number in Expanded Form   https://www.codewars.com/kata/5842df8ccbd22792a4000245

//You will be given a number and you will need to return it as a string in Expanded Form.



function expandedForm(num) {
  var digits = num.toString()
  var output = []

  for (var i = 0; i < digits.length; i++) {
    if (digits[i] > 0) {
      var zeros = ''
      // console.log(digits.length-i-1)
      for (var z = digits.length - i - 1; z > 0; z--) {
        zeros += '0'
      }
      output.push(Number(digits[i] + zeros))
    }
  }
  return output.join(' + ')
}

const expandedForm = n => n.toString()
  .split("")
  .reverse()
  .map((a, i) => a * Math.pow(10, i))
  .filter(a => a > 0)
  .reverse()
  .join(" + ");



console.log(expandedForm(12), '10 + 2');
console.log(expandedForm(42), '40 + 2');
console.log(expandedForm(70304), '70000 + 300 + 4');