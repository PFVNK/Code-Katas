//Color Ghost



var Ghost = function () {
  let colors = ['white', 'yellow', 'purple', 'red']
  let randomColor = colors[Math.floor(Math.random() * colors.length)]

  this.color = randomColor
};

let ghost = new Ghost()
console.log(ghost.color)
