//Leap Years



// function isLeapYear(year) {
//     if (year % 100 !== 0 && year % 4 === 0 || year % 400 === 0) {
//       return true
//     }

//     console.log(year % 100)
//     console.log(year % 400)

//   return false
// }


const isLeapYear = year => year % 100 !== 0 && year % 4 === 0 || year % 400 === 0



console.log(isLeapYear(1234), false, 'Year 1234');
console.log(isLeapYear(1984), true, 'Year 1984');
console.log(isLeapYear(2000), true, 'Year 2000');
console.log(isLeapYear(2010), false, 'Year 2010');
console.log(isLeapYear(2013), false, 'Year 2013');
console.log(isLeapYear(1000), false, 'Year 2013');
