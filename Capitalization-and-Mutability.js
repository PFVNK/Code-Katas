//Capitalization and Mutability



function capitalizeWord(word) {
  return word[0].toUpperCase() + word.substring(1);
}



console.log(capitalizeWord('word'), 'Word');
console.log(capitalizeWord('i'), 'I');
console.log(capitalizeWord('glasswear'), 'Glasswear');
