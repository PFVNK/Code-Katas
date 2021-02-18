//The Wide-Mouthed frog!



const mouthSize = animal => animal === 'alligator' || animal === 'ALLIGATOR' ?
  'small' :
  'wide'



console.log(mouthSize("toucan"), "wide")
console.log(mouthSize("ant bear"), "wide")
console.log(mouthSize("alligator"), "small")
