//Area or Perimeter



// const areaOrPerimeter = function (l, w) {
//   if (l === w) {
//     return l * w
//   }

//   return (l + w) * 2  
// };

const areaOrPerimeter = (l, w) => l === w ?
  l * w :
  (l + w) * 2



console.log(areaOrPerimeter(4, 4), 16);
console.log(areaOrPerimeter(6, 10), 32);
