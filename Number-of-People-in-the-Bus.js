//Number-of-People-in-the-Bus  https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/javascript

//description: Your task is to return number of people who are still in the bus after the last bus station (after the last array).



var number = function (busStops) {
  let entering = 0
  let exiting = 0

  for (i = 0; i < busStops.length; i++) {
    entering += busStops[i][0]
    exiting += busStops[i][1]
  }

  return entering - exiting
}



console.log(number([[10, 0], [3, 5], [5, 8]]), 5);
console.log(number([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]), 17);
console.log(number([[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8]]), 21);