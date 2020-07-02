//Well of Ideas - Easy Version  https://www.codewars.com/kata/57f222ce69e09c3630000212/train/javascript

//In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.



// function well(x) {
//   if (!x.includes('good')) { return 'Fail!' }

//   let good = 0

//   for (i = 0; i < x.length; i++) {
//     let word = x[i]
//     if (word === 'good') {
//       good += 1
//     }
//   }

//   return good <= 2 ? 'Publish!' : 'I smell a series!'
// }

function well(x) {
  let good = x.filter(x => x === 'good')

  return good.length === 0 ?
    'Fail!' :
    good.length <= 2 ?
      'Publish!' :
      'I smell a series!'
}



console.log(well(['bad', 'bad', 'bad']), 'Fail!');
console.log(well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!');
console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!');