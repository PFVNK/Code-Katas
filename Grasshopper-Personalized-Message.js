//Grasshopper - Personalized Message  https://www.codewars.com/kata/5772da22b89313a4d50012f7/train/javascript

//Create a function that gives a personalized greeting. This function takes two parameters: name and owner.



function greet(name, owner) {
  //check and see if name = owner
  if (name === owner) {
    //if so, return 'Hello boss'
    return 'Hello boss'
  }
  //if not, return 'Hello guest'
  return 'Hello guest'
}

function greet(name, owner) {
  return name === owner ? 'Hello boss' : 'Hello guest'
}

const greet = (name, owner) => name === owner ? 'Hello boss' : 'Hello guest'


console.log(greet('Daniel', 'Daniel'), 'Hello boss')
console.log(greet('Greg', 'Daniel'), 'Hello guest')