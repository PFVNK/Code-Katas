//Maximum Length Difference



const mxdiflg = (a1, a2) => {
  let array = [];
  if (a1.length && a2.length) {
    a1.forEach(str1 => a2.forEach(str2 => array.push(Math.abs(str1.length - str2.length))))
    return Math.max.apply(null, array);
  }
  return -1;
}



var s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
var s2 = [];
console.log(mxdiflg(s1, s2), 13);
