//Next bigger number with the same digits



function nextBigger(n) {
  var arr = n.toString().split("").reverse();
  var i = arr.findIndex((d, _i) => d < arr[_i - 1]);
  if (i === -1) { return -1; }
  var subarr = arr.slice(0, i);
  var j = subarr.findIndex((d) => d > arr[i]);
  subarr.splice(j, 1, arr[i]);
  return parseInt(arr.slice(i + 1).reverse().concat(arr[j]).concat(subarr).join(""));
}



console.log(nextBigger(12), 21)
console.log(nextBigger(513), 531)
console.log(nextBigger(2017), 2071)
console.log(nextBigger(414), 441)
console.log(nextBigger(144), 414)
