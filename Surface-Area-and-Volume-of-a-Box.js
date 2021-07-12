//Surface Area and Volume of a Box


function getSize(width, height, depth) {
  let surfaceArea = (depth * height) * 2 + (depth * width) * 2 + (width * height) * 2
  let volume = width * height * depth

  return [surfaceArea, volume]
}



console.log(getSize(4, 2, 6), 48);
// console.log(getSize(10, 10, 10), [600, 1000]);
// console.log(getSize(4, 2, 6)[0], 88);
// console.log(getSize(4, 2, 6)[1], 48);
