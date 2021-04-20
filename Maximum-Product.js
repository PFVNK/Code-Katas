//Maximum Product 



function adjacentElementsProduct(array) {
  let currentProd = array[0] * array[1]

  for (let i = 0; i < array.length; i++) {
    if (array[i] * array[i + 1] > currentProd) {
      currentProd = array[i] * array[i + 1]
    }
  }

  return currentProd
}



//positive numbers
console.log(adjacentElementsProduct([5, 8]), 40);
console.log(adjacentElementsProduct([1, 2, 3]), 6);

//both positive and negative
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]), 21);
console.log(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]), 50);
console.log(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921]), -14);

//contains zeros
console.log(adjacentElementsProduct([1, 0, 1, 0, 1000]), 0);
console.log(adjacentElementsProduct([1, 2, 3, 0]), 6);