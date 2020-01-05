//third-angle-of-a-triangle  https://www.codewars.com/kata/third-angle-of-a-triangle/train/javascript

//description: You are given two angles (in degrees) of a triangle. Write a function to return the 3rd.



function otherAngle(a, b) {
  return Math.abs(a + b - 180)
}

let otherAngle = (a, b) => Math.abs(a + b - 180)



console.log(otherAngle(30, 60), 90);
console.log(otherAngle(60, 60), 60);
console.log(otherAngle(43, 78), 59);
console.log(otherAngle(10, 20), 150);