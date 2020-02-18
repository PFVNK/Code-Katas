//Regular-Ball-Super-Ball   https://www.codewars.com/kata/53f0f358b9cb376eca001079/train/javascript

//description: Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated. If no arguments are given, ball objects should instantiate with a "ball type" of "regular."



class Ball {
  constructor(ballType = 'regular') {
    this.ballType = ballType
  }
}



console.log(new Ball().ballType, "regular");
console.log(new Ball("super").ballType, "super");