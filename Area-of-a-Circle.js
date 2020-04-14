//Area of a Circle  https://www.codewars.com/kata/537baa6f8f4b300b5900106c/train/javascript

//Complete the function circleArea so that it will return the area of a circle with the given radius. 



var circleArea = function (radius) {
  if (radius <= 0 || isNaN(radius)) { return false }
  return (radius * radius * Math.PI).toFixed(2)
};

let circleArea = radius =>
  radius <= 0 || isNaN(radius) ?
    false :
    +(radius * radius * Math.PI).toFixed(2)



console.log(circleArea(-1485.86));    //returns false
console.log(circleArea(0));           //returns false
console.log(circleArea(43.2673));     //returns 5881.25
console.log(circleArea(68));          //returns 14526.72
console.log(circleArea("number"));