//Build Tower    https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript

//description: Build Tower by the following given argument: number of floors(integer and always greater than 0).



function towerBuilder(nFloors) {
  var arr = [];
  for (var i = 0; i < nFloors; i++) {
    var spaceNum = nFloors - i - 1
    var space = " ".repeat(spaceNum)
    var num = 2 * i + 1
    var blocks = "*".repeat(num)
    arr[i] = space + blocks + space
  }
  return arr
}



console.log(towerBuilder(1), ["*"]);
console.log(towerBuilder(2), [" * ", "***"]);
console.log(towerBuilder(3), ["  *  ", " *** ", "*****"]);


