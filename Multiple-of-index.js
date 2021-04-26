//Multiple of index



function multipleOfIndex(array) {
  return array.filter((num, index) => num % index === 0)
}



console.log(
  multipleOfIndex([22, -6, 32, 82, 9, 25]), [-6, 32, 25]);
console.log(
  multipleOfIndex([68, -1, 1, -7, 10, 10]), [-1, 10]);
console.log(
  multipleOfIndex([11, -11]), [-11]);
console.log(
  multipleOfIndex([-56, -85, 72, -26, -14, 76, -27, 72, 35, -21, -67, 87, 0, 21, 59, 27, -92, 68]), [-85, 72, 0, 68]);
console.log(
  multipleOfIndex([28, 38, -44, -99, -13, -54, 77, -51]), [38, -44, -99]);
console.log(
  multipleOfIndex([-1, -49, -1, 67, 8, -60, 39, 35]), [-49, 8, -60, 35]);
