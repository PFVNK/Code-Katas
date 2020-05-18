// Keep up the hoop   https://www.codewars.com/kata/55cb632c1a5d7b3ad0000145/train/javascript

//Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :) 



function hoopCount(n) {
  if (n >= 10) {
    return "Great, now move on to tricks"
  } else {
    return "Keep at it until you get it"
  }
}

let hoopCount = n => n >= 10 ?
  "Great, now move on to tricks" :
  "Keep at it until you get it"



console.log(hoopCount(3), "Keep at it until you get it")
console.log(hoopCount(11), "Great, now move on to tricks")