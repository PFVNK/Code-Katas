//friend-or-foe   https://www.codewars.com/kata/friend-or-foe/train/javascript

//description: Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...



function friend(friends) {
  return friends.filter(name => name.length === 4)
}

let friend = friends => friends.filter(name => name.length === 4)


console.log(friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"]);
console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), ["Ryan"]);
console.log(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]), ["Jimm", "Cari", "aret"]);
console.log(friend(["Love", "Your", "Face", "1"]), ["Love", "Your", "Face"]);