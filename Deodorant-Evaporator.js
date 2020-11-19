//Deodorant Evaporator



function evaporator(content, evap_per_day, threshold) {
  let days = 0;
  let currentLvl = 100;
  let lowestLvl = 100 * (threshold * .01);

  while (currentLvl >= lowestLvl) {
    days++;
    currentLvl -= (currentLvl * (evap_per_day * .01));
  }

  return days;
}



console.log(evaporator(10, 10, 10), 22);
