// ARRAY MASH  https://www.codewars.com/kata/582642b1083e12521f0000da

// DESCRIPTION: Mash 2 arrays together so that the returning array has alternating elements of the 2 arrays . Both arrays will always be the same length.

// eg. [1, 2, 3] + ['a', 'b', 'c'] =[1, 'a', 2, 'b', 3, 'c']


function arrayMash(array1, array2) {
  let array3 = []

  for (var i = 0; i < array1.length; i++) {
    array3.push(array1[i]);
    array3.push(array2[i]);
  }

  return array3
};