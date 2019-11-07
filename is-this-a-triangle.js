//is-this-a-triangle  https://www.codewars.com/kata/is-this-a-triangle/train/javascript

//description: Implement a method that accepts 3 integer values a, b, c. The method should return true if a triangle can be built with the sides of given length and false in any other case.



function isTriangle(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
    return true
  } else {
    return false
  }
}

let isTriangle = (a, b, c) => a + b > c && a + c > b && b + c > a ? true : false



console.log(isTriangle(1, 2, 2), true);
console.log(isTriangle(7, 2, 2), false);