//SantaClausable Interface



// function isSantaClausable(obj) {
//   if (typeof obj !== 'object') return false
//   if ('sayHoHoHo' in obj && 'distributeGifts' in obj && 'goDownTheChimney' in obj) {
//     return true
//   }

//   return false
// }

function isSantaClausable(obj) {
  return ['sayHoHoHo', 'distributeGifts', 'goDownTheChimney'].every(function (methodName) {
    return typeof obj[methodName] === 'function'
  })
}



var santa = {
  sayHoHoHo: function () { console.log('Ho Ho Ho!') },
  distributeGifts: function () { console.log('Gifts for all!'); },
  goDownTheChimney: function () { console.log('*whoosh*'); }
};

var notSanta = {
  sayHoHoHo: function () { console.log('Oink Oink!') }
};


console.log(isSantaClausable(santa), true);
console.log(isSantaClausable(notSanta), false);
