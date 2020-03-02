//Sorted-yes-no-how   https://www.codewars.com/kata/580a4734d6df748060000045/train/javascript

//description: 
// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise



// function isSortedAndHow(array) {
// 	let ascCount = 0;
// 	let descCount = 0;

//   for (var i = 0; i < array.length - 1; i++){
//     if (array[i] < array[i+1]){
//       ascCount ++;
//     } else if (array[i] > array[i+1]){
//       descCount ++;
//     } 
//   }

//   if (ascCount === array.length - 1){
//   	return 'yes, ascending';
//   } else if (descCount === array.length - 1){
//   	return 'yes, descending';
//   }

//   return 'no';
// }

function isSortedAndHow(array) {
  var arr1 = [];
  arr1 = arr1.concat(array);
  arr1.sort(function (a, b) { return b - a });
  arr1 = arr1.join('');
  var arr = [];
  arr = arr.concat(array);
  arr.sort(function (a, b) { return a - b });
  arr = arr.join('');
  array = array.join('');
  if (arr === array) {
    return 'yes, ascending';
  } else if (arr1 === array) {
    return 'yes, descending';
  } else { return 'no' }
}



console.log(isSortedAndHow([1, 2]), 'yes, ascending');
console.log(isSortedAndHow([15, 7, 3, -8]), 'yes, descending');
console.log(isSortedAndHow([4, 2, 30]), 'no');