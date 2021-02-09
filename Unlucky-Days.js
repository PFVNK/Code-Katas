//Unlucky Days



function unluckyDays(year) {
  let start = new Date(year, 0, 1)
  let end = new Date(year, 11, 31)
  let darkDays = 0

  for (let i = start; i < end; i.setDate(i.getDate() + 1)) {
    let splitDate = i.toString().split(' ')

    if (splitDate[0] === 'Fri' && splitDate[2] === '13') {
      darkDays++
    }
  }

  return darkDays
}



console.log(unluckyDays(1586), 1);
console.log(unluckyDays(1001), 3);
console.log(unluckyDays(2819), 2);
console.log(unluckyDays(2792), 2);
console.log(unluckyDays(2723), 2);
console.log(unluckyDays(1909), 1);
console.log(unluckyDays(1812), 2);
console.log(unluckyDays(1618), 2);
console.log(unluckyDays(2132), 1);
console.log(unluckyDays(2065), 3);
