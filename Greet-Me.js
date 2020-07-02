//Greet Me  https://www.codewars.com/kata/535474308bb336c9980006f2/train/javascript

//Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.



var greet = function (name) {
  return `Hello ${name.charAt(0).toUpperCase() + name.slice(1)}!`
};

const greet = name => `Hello ${name.charAt(0).toUpperCase() + name.slice(1)}!`

console.log(greet('riley'), 'Hello Riley!');