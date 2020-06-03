//How many lightsabers do you own?   https://www.codewars.com/kata/51f9d93b4095e0a7200001b8

//accepts the name of a programmer, and returns the number of lightsabers owned by that person. The only person who owns lightsabers is Zach, by the way.He owns 18, which is an awesome number of lightsabers.Anyone else owns 0.



function howManyLightsabersDoYouOwn(name) {
  //check if name is zach, if so
  if (name === 'Zach') {
    //return 18
    return 18
  }

  //else, return 0
  return 0
}

let howManyLightsabersDoYouOwn = name => name === 'Zach' ? 18 : 0



console.log(howManyLightsabersDoYouOwn(), 0)
console.log(howManyLightsabersDoYouOwn("Adam"), 0)
console.log(howManyLightsabersDoYouOwn("Zach"), 18)