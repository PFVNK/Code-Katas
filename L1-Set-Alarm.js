//L1: Set Alarm



// function setAlarm(employed, vacation) {
//  if (employed && !vacation) {
//   return true
//  } else {
//    return false
//  }
// }

// function setAlarm(employed, vacation) {
//   return employed && !vacation
// }

const setAlarm = (employed, vacation) => employed && !vacation



console.log(setAlarm(true, true), "Should be false.");
console.log(setAlarm(false, true), "Should be false.");
console.log(setAlarm(true, false), "Should be true.");