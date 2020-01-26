//Keep-Hydrated  https://www.codewars.com/kata/582cb0224e56e068d800003c/train/javascript

//description: You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.



function litres(time) {
  return Math.trunc(Math.trunc(time) * .5)
}

let litres = time => Math.trunc(Math.trunc(time) * .5)



console.log(litres(2), 1);
console.log(litres(1.4), 0);
console.log(litres(12.3), 6);
console.log(litres(0.82), 0);
console.log(litres(11.8), 5);
console.log(litres(1787), 893);
console.log(litres(0), 0);