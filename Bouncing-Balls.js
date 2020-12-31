//Bouncing Balls



function bouncingBall(h, bounce, window) {
  if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
    let ballSighting = 0
    while (h > window) {
      h = h * bounce
      ballSighting += 2
    }

    return ballSighting - 1
  }
}



console.log(bouncingBall(3.0, 0.66, 1.5), 3);
console.log(bouncingBall(30.0, 0.66, 1.5), 15);
console.log(bouncingBall(2, 0.5, 1), 1);
console.log(bouncingBall(30, 0.4, 10), 3);
