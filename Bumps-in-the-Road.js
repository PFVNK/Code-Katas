//Bumps in the Road



// function bump(x) {
//   if (x.replaceAll('_', '').length >= 15) {
//     return 'Car Dead'
//   }

//   return 'Woohoo!'
// }

function bump(x) {
  return x.split('_').join('').length >= 15 ? 'Car Dead' : 'Woohoo!'
}



console.log(bump("n"), "Woohoo!");
console.log(bump("_nnnnnnn_n__n______nn__nn_nnn"), "Car Dead");
console.log(bump("______n___n_"), "Woohoo!");
