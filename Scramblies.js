//Scramblies   https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript

//Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.



function scramble(str1, str2) {
  let letterCount = 0

  for (i = 0; i < str2.length; i++) {
    if (str1.includes(str2[i])) {
      letterCount += 1
      str1 = str1.slice(0, str1.indexOf(str2[i])) + str1.slice(str1.indexOf(str2[i]) + 1)
    }
  }

  return letterCount === str2.length ? true : false
}

function scramble(str1, str2) {
  let letterHolder = {};
  for (let letter of str1) {
    if (letterHolder[letter]) letterHolder[letter]++;
    else letterHolder[letter] = 1;
  }
  for (let letter of str2) {
    if (!letterHolder[letter]) return false
    else letterHolder[letter]--;
  }
  return true;
}




console.log(scramble('rkqodlw', 'world'), true);
console.log(scramble('cedewaraaossoqqyt', 'codewars'), true);
console.log(scramble('katas', 'steak'), false);
console.log(scramble('scriptjava', 'javascript'), true);
console.log(scramble('scriptingjav', 'javascript'), false);
console.log(scramble('scriptsjava', 'javascripts'), true);
console.log(scramble('jscripts', 'javascript'), false);
console.log(scramble('aabbcamaomsccdd', 'commas'), true);