//Century-From-Year https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/javascript

//description: Given a year, return the century it is in.

// The first century spans from the year 1 up to and including the year 100, 
// The second - from the year 101 up to and including the year 200, etc.



function century(year) {
  return Math.ceil(year / 100);
}

let century = year => Math.ceil(year / 100)



console.log(century(1705), 18);
console.log(century(1900), 19);
console.log(century(1601), 17);
console.log(century(2000), 20);
console.log(century(89), 1);