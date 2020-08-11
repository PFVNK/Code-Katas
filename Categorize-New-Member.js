//Categorize New Member  https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript



function openOrSenior(data) {
  let enroll = []

  for (let i = 0; i < data.length; i++) {
    let stat = data[i]

    if (stat[0] >= 55 && stat[1] > 7) {
      enroll.push('Senior')
    } else {
      enroll.push('Open')
    }
  }

  return enroll
}



console.log(openOrSenior(
  [[45, 12], [55, 21], [19, -2], [104, 20]]), ['Open', 'Senior', 'Open', 'Senior'])
console.log(openOrSenior(
  [[3, 12], [55, 1], [91, -2], [54, 23]]), ['Open', 'Open', 'Open', 'Open'])
console.log(openOrSenior(
  [[59, 12], [55, -1], [12, -2], [12, 12]]), ['Senior', 'Open', 'Open', 'Open'])