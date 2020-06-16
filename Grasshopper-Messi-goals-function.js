//Grasshopper - Messi goals function  https://www.codewars.com/kata/55f73be6e12baaa5900000d4/train/javascript

//Complete the function to return his total number of goals in all three leagues.



// function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
//   return laLigaGoals + copaDelReyGoals + championsLeagueGoals
// }

let goals = (...a) => a.reduce((acc, arg) => acc + arg, 0)



console.log(goals(0, 0, 0), 0)
console.log(goals(43, 10, 5), 58)