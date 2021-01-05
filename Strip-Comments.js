//Strip Comments



function solution(input, markers) {
  let breaks = input.split('\n')

  for (let i in markers) {
    for (let j in breaks) {
      let index = breaks[j].indexOf(markers[i])
      if (index >= 0) {
        breaks[j] = breaks[j].substring(0, index).trim()
      }
    }
  }

  return breaks.join('\n')
};



console.log(solution(
  "apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]), "apples, plums\npears\noranges")
// console.log(solution(
//   "Q @b\nu\ne -e f g", ["@", "-"]), "Q\nu\ne")
