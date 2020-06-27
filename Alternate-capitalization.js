//Alternate capitalization   https://www.codewars.com/kata/59cfc000aeb2844d16000075/train/javascript

//Given a string, capitalize the letters that occupy even indexes and odd indexes separately



function capitalize(s) {
  s = s.split('')
  let even = []
  let odd = []

  for (i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      even.push(s[i].toUpperCase())
    } else {
      even.push(s[i])
    }
  }

  for (i = 0; i < s.length; i++) {
    if (i % 2 !== 0) {
      odd.push(s[i].toUpperCase())
    } else {
      odd.push(s[i])
    }
  }

  return [even.join(''), odd.join('')]
};



console.log(capitalize("abcdef"), ['AbCdEf', 'aBcDeF']);
console.log(capitalize("codewars"), ['CoDeWaRs', 'cOdEwArS']);
console.log(capitalize("abracadabra"), ['AbRaCaDaBrA', 'aBrAcAdAbRa']);
console.log(capitalize("codewarriors"), ['CoDeWaRrIoRs', 'cOdEwArRiOrS']);