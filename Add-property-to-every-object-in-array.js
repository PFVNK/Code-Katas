//Add property to every object in array



var questions = [{
  question: "What's the currency of the USA?",
  choices: ["US dollar", "Ruble", "Horses", "Gold"],
  corAnswer: 0
}, {
  question: "Where was the American Declaration of Independence signed?",
  choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
  corAnswer: 0
}];

questions.map(entry => {
  entry.usersAnswer = null
  return entry
})



console.log(questions[0].usersAnswer === null);
