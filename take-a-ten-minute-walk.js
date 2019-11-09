//take-a-ten-minute-walk   https://www.codewars.com/kata/take-a-ten-minute-walk/train/javascript



function isValidWalk(walk) {
  if (walk.length === 10) {
    for (i = 0; i < walk.length; i++) {
      if (walk[i] === walk[i + 1]) {
        console.log(walk[walk.length - 1])
        return false
      } else if (walk[0] !== walk[walk.length - 1]) {
        return true
      }
    }
  } else {
    return false
  }
}

function isValidWalk(walk) {
  if (walk.length == 10) {
    var arr = [0, 0, 0, 0];
    for (var i = 0; i < walk.length; i++) {
      if (walk[i] == 'n') {
        arr[0]++;
      } else if (walk[i] == 's') {
        arr[1]++;
      } else if (walk[i] == 'w') {
        arr[2]++;
      } else if (walk[i] == 'e') {
        arr[3]++;
      }
    }
    if (arr[0] == arr[1] && arr[2] == arr[3]) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}



console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']), 'true');
console.log(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']), 'false');
console.log(isValidWalk(['w']), 'false');
console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']), 'false');