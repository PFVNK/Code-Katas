//Do you speak "English"?



function spEng(sentence) {
  for (var i = 0; i < sentence.length - 6; i++) {
    if (sentence.slice(i, i + 7).toLowerCase() === 'english') {

      return true;
    }
  }
  return false;
}



console.log(spEng("english"), true);
console.log(spEng("egnlish"), false);



