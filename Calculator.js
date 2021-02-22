//Calculator

var operators = {
  '/': function (a, b) {
    return a / b;
  },
  '*': function (a, b) {
    return a * b;
  }
};

const Calculator = function () {
  this.evaluate = string => {
    let breakdown = string.split(' ')
    console.log(breakdown)

    for (let i = 0; i < breakdown.length; i++) {
      let element = breakdown[i]

      if (element === '*' || element === '/') {
        let evaluation = breakdown.slice(i - 1, i + 2)
        if (evaluation.includes('*') || evaluation.includes('/')) {
          evaluation = operators[evaluation[1]](evaluation[0], evaluation[2])
        }

        console.log(evaluation)
        breakdown.splice(i - 1, 3, evaluation)
        console.log(breakdown)
      }
    }
  }
};

var calculate = new Calculator()
console.log(calculate.evaluate('1 + 2 * 4 - 8'), 1);
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

// const Calculator = function () {
//   this.evaluate = string => {
//     let breakdown = string.split(' ')
//     console.log(breakdown)

//     for (let i = 0; i < breakdown.length; i++) {
//       let element = breakdown[i]
//       console.log(element)

//       if (element === '*' || element === '/') {
//         let evaluation = breakdown.slice(i - 1, i + 2)
//         evaluation = evaluation.join(' ').toString()
//         breakdown.splice(i - 1, 3, eval(evaluation))
//         breakdown = breakdown.join('')
//         return eval(breakdown)
//       }
//     }

//     breakdown = breakdown.join('')
//     return eval(breakdown)
//   }
// };

// const Calculator = function () {
//   this.evaluate = string => {
//     let breakdown = string.split(' ')

//     for (let i = 0; i < breakdown.length; i++) {
//       let element = breakdown[i]

//       if (element === '*' || element === '/') {
//         let evaluation = breakdown.slice(i - 1, i + 2)
//         evaluation = evaluation.join(' ').toString()
//         console.log(evaluation)
//         evaluation = eval(evaluation);
//         breakdown.splice(i - 1, 3, evaluation)
//         breakdown = breakdown.join('')
//         return eval(breakdown);
//       }
//     }

//     breakdown = breakdown.join('')
//     return eval(breakdown);
//   }
// };
