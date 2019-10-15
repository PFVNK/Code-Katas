// PERMUTATIONS  https://www.codewars.com/kata/5254ca2719453dcc0b00027d

// DESCRIPTION: In this kata you have to create all permutations of an input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

// Examples:

// permutations('a'); // ['a']
// permutations('ab'); // ['ab', 'ba']
// permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

// The order of the permutations doesn't matter.


function permutations(string) {
  let permArr = [],
    usedChars = [];

  let arr = string.split('');

  let permute = (array) => {
    let i, ch;
    for (i = 0; i < array.length; i++) {
      ch = array.splice(i, 1)[0];
      usedChars.push(ch);
      if (array.length === 0) {
        permArr.push(usedChars.slice());
      }
      permute(array);
      array.splice(i, 0, ch);
      usedChars.pop();
    }

    return permArr;
  };

  let result = permute(arr);

  for (let i = 0; i < result.length; i++) {
    let str = "";
    for (let j = 0; j < result[i].length; j++) {
      str += result[i][j];
    }
    result[i] = str;
  }

  return result.filter((item, pos) => { return result.indexOf(item) == pos; });
}