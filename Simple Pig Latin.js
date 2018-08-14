// SIMPLE PIG LATIN  www.codewars.com/kata/simple-pig-latin/train/javascript

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldWay !


function pigIt(str){
	if (/[?!.]/.test(str)) {
		let noPunc = str.slice(0, -2);	
  		let punctuation = str.slice(-2);
  		let pLatin = noPunc.split(' ').map(x => x.substr(1) + x.substr(0,1) + 'ay').join(' ');
  		return pLatin + punctuation;
	} else {
		return str.split(' ').map(x => x.substr(1) + x.substr(0,1) + 'ay').join(' ');;
	} 
}