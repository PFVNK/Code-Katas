//Extract Nested Object Reference



var obj = {
  person: {
    name: 'joe',
    history: {
      hometown: 'bratislava',
      bio: {
        funFact: 'I like fishing.'
      }
    }
  }
};

// Object.prototype.hash = function (string) {
//   return eval(`obj.${string.split('.').map(name => name + '?').join('.').slice(0, -1)}`)
// }

Object.prototype.hash = function (string) {
  try {
    return eval(`this.${string}`)
  }
  catch (e) {
    return undefined
  }
}



console.log(obj.hash('person.name'), 'joe');
console.log(obj.hash('person.game.home'), undefined);
