//are-you-playing-banjo  https://www.codewars.com/kata/are-you-playing-banjo/train/javascript

//descritption: Create a function which answers the question "Are you playing banjo?". If your name starts with the letter "R" or lower case "r", you are playing banjo!



function areYouPlayingBanjo(name) {
  if (name.charAt(0) === 'r' || name.charAt(0) === 'R') {
    return `${name} plays banjo`
  } else {
    return `${name} does not play banjo`
  }
}

function areYouPlayingBanjo(name) {
  return name.charAt(0) === 'r' || name.charAt(0) === 'R' ? `${name} plays banjo` : `${name} does not play banjo`
}

let areYouPlayingBanjo = name => name.charAt(0) === 'r' || name.charAt(0) === 'R'
  ? `${name} plays banjo`
  : `${name} does not play banjo`



console.log(areYouPlayingBanjo("Martin"), "Martin does not play banjo");
console.log(areYouPlayingBanjo("Rikke"), "Rikke plays banjo");