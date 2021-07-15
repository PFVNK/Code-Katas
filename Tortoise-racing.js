//Tortoise racing



function race(v1, v2, g) {
  let diff = v2 - v1
  let totalMins = (g / diff) * 60

  let hours = Math.floor(totalMins / 60)
  let mins = Math.floor(totalMins - (hours * 60))
  let secs = Math.round((totalMins * 60) - (hours * 3600) - (mins * 60))

  if (hours < 0 || mins < 0 || secs < 0) return null

  return [hours, mins, secs]
}



console.log(race(720, 850, 70), [0, 32, 18])
console.log(race(80, 91, 37), [3, 21, 49])
console.log(race(80, 100, 40), [2, 0, 0])
