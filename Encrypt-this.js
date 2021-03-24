//Encrypt this!



function encryptThis(text) {
  let strArr = text.split(' ');
  let output = [];

  strArr.forEach(str => {
    if (str.length === 1) {
      output.push(str.charCodeAt(0));
    }
    else {
      let tempStr = str.split('');
      tempStr[0] = str.charCodeAt(0);
      tempStr[1] = str[str.length - 1];
      tempStr[str.length - 1] = str[1];
      output.push(tempStr.join(''));
    }
  });

  return output.join(' ');
}



// console.log(
//   encryptThis("A"), "65");
// console.log(
//   encryptThis("A wise old owl lived in an oak"), "65 119esi 111dl 111lw 108dvei 105n 97n 111ka");
console.log(
  encryptThis("more"), "109ero");
// console.log(
//   encryptThis("The less he spoke the more he heard"), "84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare");
// console.log(
//   encryptThis("Why can we not all be like that wise old bird"), "87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri");
// console.log(
//   encryptThis("Thank you Piotr for all your help"), "84kanh 121uo 80roti 102ro 97ll 121ruo 104ple");
