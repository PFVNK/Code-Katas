//Will there be enough space?  https://www.codewars.com/kata/5875b200d520904a04000003/train/javascript

//If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.



// function enough(cap, on, wait) {
//   let remaining = cap - on

//   if (remaining < wait) {
//     return wait - remaining
//   }

//   return 0
// }

const enough = (cap, on, wait) => cap - on < wait ?
  wait - (cap - on) :
  0



console.log(enough(10, 5, 5), 0);
console.log(enough(100, 60, 50), 10);
console.log(enough(20, 5, 5), 0);