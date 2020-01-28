//Jennys-secret-message  https://www.codewars.com/kata/55225023e1be1ec8bc000390/train/javascript

//description: Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.



// function greet(name) {
//   if (name === "Johnny")
//     return "Hello, my love!";

//   return "Hello, " + name + "!";
// }

let greet = name => name === "Johnny" ?
  "Hello, my love!" :
  `Hello ${name}!`



console.log(greet("Jim"), "Hello, Jim!");
console.log(greet("Jane"), "Hello, Jane!");
console.log(greet("Simon"), "Hello, Simon!");
console.log(greet("Johnny"), "Hello, my love!");