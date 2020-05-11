//Get Planet Name By ID   https://www.codewars.com/kata/515e188a311df01cba000003/train/javascript

//The function is not returning the correct values. Can you figure out why?



function getPlanetName(id) {
  let planets = [
    'Mercury',
    'Venus',
    'Earth',
    'Mars',
    'Jupiter',
    'Saturn',
    'Uranus',
    'Neptune'
  ]


  return planets[id - 1];
}



console.log(getPlanetName(2), 'Venus');
console.log(getPlanetName(5), 'Jupiter');
console.log(getPlanetName(3), 'Earth');