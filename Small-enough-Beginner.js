//Small enough? - Beginner



function smallEnough(a, limit) {
  let holding = []

  for (let i = 0; i < a.length; i++) {
    let number = a[i]
    if (number <= limit) {
      holding.push(number)
    }
  }

  if (holding.length === a.length) {
    return true
  } else {
    return false
  }
}

function smallEnough(a, limit) {
  return a.filter(num => num <= limit).length === a.length ? true : false
}



console.log(smallEnough([66, 101], 200), true);
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100), false);
console.log(smallEnough([101, 45, 75, 105, 99, 107], 107), true);
console.log(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120), true);
