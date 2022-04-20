//Closest elevator

// Floors: 0-2

function elevator(left, right, call) {
  if (call === left && call === right) {
    return 'right'
  }
  if (call < 1) {
    return 'left'
  }

  return 'right'
}

function elevator(left, right, call) {
  return call === left && call === right ?
    'right' :
    call < 1 ? 'left' :
      'right'
}



console.log(elevator(0, 1, 0), 'left');
console.log(elevator(0, 1, 1), 'right');
console.log(elevator(0, 1, 2), 'right');
console.log(elevator(0, 0, 0), 'right');
console.log(elevator(0, 2, 1), 'right');
