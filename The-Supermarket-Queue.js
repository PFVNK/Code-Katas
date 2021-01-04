//The Supermarket Queue




function queueTime(customers, n) {
  var arr = new Array(n).fill(0);

  for (var i = 0; i < customers.length; i++) {
    var idx = arr.indexOf(Math.min(...arr));
    arr[idx] += customers[i];
  }

  return Math.max(...arr);
}





// console.log(queueTime([], 1), 0);
// console.log(queueTime([1, 2, 3, 4], 1), 10);
console.log(queueTime([2, 2, 3, 3, 4, 4], 2), 9);
// console.log(queueTime([1, 2, 3, 4, 5], 100), 5);
