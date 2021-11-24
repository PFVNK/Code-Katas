//Triple trouble   https://www.codewars.com/kata/55d5434f269c0c3f1b000058/train/javascript

//description: which takes numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.



function tripleTrouble(one, two, three) {
  let str = []

  for (let i = 0; i < one.length; i++) {
    str.push(one[i], two[i], three[i])
  }

  return str.join('')
}



console.log(tripleTrouble("aaa", "bbb", "ccc"), "abcabcabc");
console.log(tripleTrouble("aaaaaa", "bbbbbb", "cccccc"), "abcabcabcabcabcabc");
console.log(tripleTrouble("burn", "reds", "roll"), "brrueordlnsl");
console.log(tripleTrouble("Sea", "urn", "pms"), "Supermans");
console.log(tripleTrouble("LLh", "euo", "xtr"), "LexLuthor");