//Swap Values   https://www.codewars.com/kata/5388f0e00b24c5635e000fc6/train/javascript

//I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.



function swapValues(arr) {
  return arr.reverse()
}



var arr = [1, 2]
swapValues(arr);
console.log(arr[0], 2, "Failed swapping numbers")
console.log(arr[1], 1, "Failed swapping numbers")