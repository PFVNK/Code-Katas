//Milk and Cookies for Santa



function timeForMilkAndCookies(date) {
  return date.getDate() == 24 && date.getMonth() === 11
}



var year = 2013;
var month = 11;//Date class is 0 based, so 11 = December
var day = 24;
console.log(
  timeForMilkAndCookies(new Date(year, month, day)), true);

year = 2013;
month = 10;
day = 24;
console.log(
  timeForMilkAndCookies(new Date(year, month, day)), false);
