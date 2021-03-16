//Pete, the baker



function cakes(recipe, available) {
  const aKeys = Object.keys(available)
  const rKeys = Object.keys(recipe)
  let answer = Infinity

  if (!rKeys.every(e => aKeys.includes(e))) return 0

  rKeys.forEach(key => {
    if (available[key] / recipe[key] <= answer) {
      answer = available[key] / recipe[key]
    }
  })

  return Math.floor(answer)
}



recipe = { flour: 500, sugar: 200, eggs: 1 };
available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
console.log(cakes(recipe, available), 2);

// recipe = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 };
// available = { sugar: 500, flour: 2000, milk: 2000 };
// console.log(cakes(recipe, available), 0);
