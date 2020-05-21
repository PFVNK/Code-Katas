//Human readable duration format   https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript

//Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.



function formatDuration(seconds) {
  if (seconds === 0) return 'now';
  var typeArr = ['year', 'day', 'hour', 'minute', 'second'];
  var sec = 0;
  var minute = 0;
  var hour = 0;
  var day = 0;
  var year = 0;
  minute = Math.floor(seconds / 60);
  sec = seconds % 60;

  hour = Math.floor(minute / 60);
  minute = minute % 60;

  day = Math.floor(hour / 24);
  hour = hour % 24;

  year = Math.floor(day / 365);
  day = day % 365;

  var resultArr = [year, day, hour, minute, sec];
  var resultStrArr = [];
  for (var i = 0; i < resultArr.length; i++) {
    if (resultArr[i] === 1) {
      resultStrArr.push(resultArr[i] + ' ' + typeArr[i]);
    } else if (resultArr[i] >= 2) {
      resultStrArr.push(resultArr[i] + ' ' + typeArr[i] + 's');
    }
  }
  var resultStr = '';
  for (var i = 0; i < resultStrArr.length; i++) {
    if (i === resultStrArr.length - 2) {
      resultStr += resultStrArr[i] + ' and ' + resultStrArr[i + 1];
      break;
    }
    if (i !== resultStrArr.length - 1) {
      resultStr += resultStrArr[i] + ', ';
    } else {
      resultStr += resultStrArr[i];
    }
  }
  return resultStr;
}



console.log(formatDuration(1), "1 second");
console.log(formatDuration(62), "1 minute and 2 seconds");
console.log(formatDuration(120), "2 minutes");
console.log(formatDuration(3600), "1 hour");
console.log(formatDuration(3662), "1 hour, 1 minute and 2 seconds");


// let formatted = []

// let remainder = seconds % 60
// let minutes = seconds / 60
// let remHours = minutes % 60
// console.log(remHours)
// let hours = minutes / 60
// let days = hours / 24
// let years = days / 365