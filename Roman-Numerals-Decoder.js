//Roman Numerals Decoder   https://www.codewars.com/kata/51b6249c4612257ac0000005/train/javascript

//Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.



function solution(roman) {
  var romanNum = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };

  return roman.match(/CM|CD|XC|XL|IX|IV|\w/g).reduce((accum, roman) => accum + romanNum[roman], 0);
}

function solution(roman) {
  const numeralMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const arrNums = roman.split('').map((el) => numeralMap[el]);

  return arrNums.reduce((sum, cur, i, a) => {
    if (cur < a[i + 1]) return sum - cur;
    return sum + cur;
  }, 0)
}



console.log(solution('XXI'), 21)
console.log(solution('I'), 1)
console.log(solution('IV'), 4)
console.log(solution('MMVIII'), 2008)
console.log(solution('MDCLXVI'), 1666)