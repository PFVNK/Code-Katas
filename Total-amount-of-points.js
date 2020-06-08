//Total amount of points   https://www.codewars.com/kata/5bb904724c47249b10000131

//Write a function that takes such collection and counts the points of our team in the championship.



function points(games) {
  let numbers = games.join('').split('').filter(x => !isNaN(x))
  let pointTotal = 0

  function calculation() {
    for (let i = 0; i < numbers.length; i++) {
      if (+numbers[0] > +numbers[1]) {
        pointTotal += 3
        numbers.splice(0, 2)
        calculation()
      }
      if (+numbers[0] === +numbers[1]) {
        pointTotal += 1
        numbers.splice(0, 2)
        calculation()
      }
    }
  }

  calculation()
  return pointTotal
}

let points = games => games.reduce((output, number) => {
  return output += number[0] > number[2] ?
    3 :
    number[0] === number[2] ?
      1 :
      0
}, 0)



console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]), 30);
console.log(points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"]), 10);
console.log(points(["0:1", "0:2", "0:3", "0:4", "1:2", "1:3", "1:4", "2:3", "2:4", "3:4"]), 0);
console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "1:3", "1:4", "2:3", "2:4", "3:4"]), 15);
console.log(points(["1:0", "2:0", "3:0", "4:4", "2:2", "3:3", "1:4", "2:3", "2:4", "3:4"]), 12);