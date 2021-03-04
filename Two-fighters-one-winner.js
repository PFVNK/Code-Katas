//Two fighters, one winner.



function Fighter(name, health, damagePerAttack) {
  this.name = name;
  this.health = health;
  this.damagePerAttack = damagePerAttack;
  this.toString = function () { return this.name; }
}

function declareWinner(fighter1, fighter2, firstAttacker) {
  let a = [fighter1, fighter2].find(v => v.name === firstAttacker)
  let b = [fighter1, fighter2].find(v => v.name !== firstAttacker)

  return Math.ceil(b.health / a.damagePerAttack) <= Math.ceil(a.health / b.damagePerAttack) ? a.name : b.name
}



console.log(
  declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew"), "Lew");
console.log(
  declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry"), "Harry");
console.log(
  declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry"), "Harald")
console.log(
  declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harald"), "Harald")
console.log(
  declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Jerry"), "Harald")
console.log(
  declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Harald"), "Harald")


// if (fighter1.name === firstAttacker) {
//   while (fighter1.health > 0 && fighter2.health > 0) {
//     fighter2.health = fighter2.health - fighter1.damagePerAttack
//     if (fighter2.health <= 0) return fighter1.name
//     fighter1.health = fighter1.health - fighter2.damagePerAttack
//     if (fighter1.health <= 0) return fighter2.name
//   }
// } else {
//   while (fighter1.health > 0 && fighter2.health > 0) {
//     fighter1.health = fighter1.health - fighter2.damagePerAttack
//     if (fighter2.health <= 0) return fighter1.name
//     fighter2.health = fighter2.health - fighter1.damagePerAttack
//     if (fighter1.health <= 0) return fighter2.name
//   }
// }
