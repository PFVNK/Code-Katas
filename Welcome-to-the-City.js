//Welcome to the City  https://www.codewars.com/kata/5302d846be2a9189af0001e4/train/javascript



function sayHello(name, city, state) {
  return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}`
}



console.log(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'), 'Hello, John Smith! Welcome to Phoenix, Arizona!')