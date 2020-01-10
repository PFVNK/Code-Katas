//Lottery-machine  https://www.codewars.com/kata/5832db03d5bafb7d96000107/train/javascript

//description: Your code inside lottery() must filter out all letters and return unique integers as a string



function lottery(str) {
  if (/\d/.test(str)) {
    let number = str.replace(/[^0-9]/g, '').toString().split('')
    return [...new Set(number)].join('')
  } else {
    return 'One more run!'
  }
}



console.log(lottery("wQ8Hy0y5m5oshQPeRCkG"), "805", "should return unique integer(s) or a string");
console.log(lottery("ffaQtaRFKeGIIBIcSJtg"), "One more run!", "should return unique integer(s) or a string");