//RGB To Hex Conversion   https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript

//The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned

var rgbToHex = function (rgb) {
  var hex = Number(rgb).toString(16);
  if (hex.length < 2) {
    hex = "0" + hex;
  }
  return hex;
};

function rgb(r, g, b) {
  let args = [...arguments]
  let rgbs = args.map(number => number > 255 ? 255 : number)
  rgbs = rgbs.map(number => number < 0 ? 0 : number)
  console.log(rgbs)
  var red = rgbToHex(rgbs[0]);
  var green = rgbToHex(rgbs[1]);
  var blue = rgbToHex(rgbs[2]);
  return (red + green + blue).toUpperCase();
}



console.log(rgb(0, 0, 0), '000000')
console.log(rgb(0, 0, -20), '000000')
console.log(rgb(300, 255, 255), 'FFFFFF')
console.log(rgb(173, 255, 47), 'ADFF2F')