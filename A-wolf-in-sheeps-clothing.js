//A wolf in sheep's clothing



function warnTheSheep(queue) {
  if (queue[queue.length - 1] === 'wolf') return 'Pls go away and stop eating my sheep';

  let index = queue.indexOf('wolf');
  return `Oi! Sheep number ${queue.length - index - 1}! You are about to be eaten by a wolf!`;
}



console.log(
  warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]), "Oi! Sheep number 2! You are about to be eaten by a wolf!");
console.log(
  warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]), "Oi! Sheep number 5! You are about to be eaten by a wolf!");
console.log(
  warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]), "Oi! Sheep number 6! You are about to be eaten by a wolf!");
console.log(
  warnTheSheep(["sheep", "wolf", "sheep"]), "Oi! Sheep number 1! You are about to be eaten by a wolf!");
console.log(
  warnTheSheep(["sheep", "sheep", "wolf"]), "Pls go away and stop eating my sheep");
