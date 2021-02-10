//Remove duplicate words



// function removeDuplicateWords(s) {
//   s = s.split(' ')
//   let unique = new Set(s)
//   return [...unique].join(' ')
// }

const removeDuplicateWords = s => [...new Set(s.split(' '))].join(' ')



console.log(
  removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'), 'alpha beta gamma delta');
