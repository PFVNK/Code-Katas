//Remove First and Last Character Part Two



function array(arr) {
  let arrArr = arr.split(',')

  if (arrArr.length >= 3) {
    return arrArr.slice(1, -1).join('')
  }

  return null
}



console.log(array(''), null);
console.log(array('1'), null);
console.log(array('1, 3'), null);
console.log(array('1,2,3'), '2');
