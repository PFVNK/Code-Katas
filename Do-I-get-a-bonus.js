//Do-I-get-a-bonus  https://www.codewars.com/kata/56f6ad906b88de513f000d96/train/javascript

//description: If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.



// function bonusTime(salary, bonus) {
//   if (bonus) {
//     return salary * 10
//   }

//   return salary
// }

let bonusTime = (salary, bonus) => bonus ? `£${salary * 10}` : `£${salary}`



console.log(bonusTime(10000, true), '£100000');
console.log(bonusTime(25000, true), '£250000');
console.log(bonusTime(10000, false), '£10000');
console.log(bonusTime(60000, false), '£60000');
console.log(bonusTime(2, true), '£20');
console.log(bonusTime(78, false), '£78');
console.log(bonusTime(67890, true), '£678900');