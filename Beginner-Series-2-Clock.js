//Beginner Series #2 Clock

//1hr = 3,600,000ms 1min = 60,000ms 1s = 1000ms



function past(h, m, s) {
  let hr = h * 3600000
  let min = m * 60000
  let sec = s * 1000

  return hr + min + sec
}

function past(h, m, s) {
  return (h * 3600000) + (m * 60000) + (s * 1000)
}

let past = (h, m, s) => (h * 3600000) + (m * 60000) + (s * 1000)



console.log(past(0, 1, 1), 61000)
console.log(past(1, 1, 1), 3661000)
console.log(past(0, 0, 0), 0)
console.log(past(1, 0, 1), 3601000)
console.log(past(1, 0, 0), 3600000)
