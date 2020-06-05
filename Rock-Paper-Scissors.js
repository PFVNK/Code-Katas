//Rock Paper Scissors!  https://www.codewars.com/kata/5672a98bdbdd995fad00000f

//Let's play! You have to return which player won! In case of a draw return Draw!.

//rock beats scissors - paper beats rock - scissors beats paper



const rps = (p1, p2) => {
  if (p1 === p2) { return 'Draw!' }
  if (p1 === 'rock' && p2 === 'scissors') { return 'Player 1 won!' }
  if (p1 === 'scissors' && p2 === 'paper') { return 'Player 1 wins!' }
  if (p1 === 'paper' && p2 === 'rock') { return 'Player 1 wins!' }
  return 'Player 2 wins!'
};



console.log(rps('rock', 'scissors'), 'Player 1 won!');
console.log(rps('scissors', 'rock'), 'Player 2 wins!');
console.log(rps('rock', 'rock'), 'Draw!');