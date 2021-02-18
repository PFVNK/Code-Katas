//Calculator


const Calculator = function () {
  this.evaluate = string => {
    var breakdown = string.split(' ')

    for (let i = 0; i < breakdown.length; i++) {
      let element = breakdown[i]

      if (element === '*' || element === '/') {
        let evaluation = breakdown.slice(i - 1, i + 2)
        evaluation = evaluation.join(' ').toString()
        breakdown.splice(i - 1, 3, eval(evaluation))
        breakdown = breakdown.join('')
        return eval(breakdown)
      } else {
        breakdown = breakdown.join('')
        return eval(breakdown)
      }
    }
  }
};

var calculate = new Calculator()
console.log(calculate.evaluate('127'), 127);
console.log(calculate.evaluate('2 + 3'), 5);
console.log(calculate.evaluate('2 - 3 - 4'), -5);
console.log(calculate.evaluate('10 * 5 / 2'), 25);


// const Calculator = function () {
//   this.evaluate = string => {
//     var breakdown = string.split(' ')

//     for (let i = 0; i < breakdown.length; i++) {
//       let element = breakdown[i]

//       if (element === '*' || element === '/') {
//         let evaluation = breakdown.slice(i - 1, i + 2)
//         evaluation = evaluation.join(' ').toString()
//         breakdown.splice(i - 1, 3, eval(evaluation))
//         breakdown = breakdown.join('')
//         return eval(breakdown)
//       } else {
//         breakdown = breakdown.join('')
//         return eval(breakdown)
//       }
//     }
//   }
// };
