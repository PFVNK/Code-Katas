//Bouncing Balls



function bouncingBall(h, bounce, window) {
  let ballSighting = 0
  while (h > window) {
    h = h * bounce
    ballSighting += 2
  }

  return ballSighting - 1
}



console.log(bouncingBall(3.0, 0.66, 1.5), 3);
console.log(bouncingBall(30.0, 0.66, 1.5), 15);
