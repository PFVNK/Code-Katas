//Simple validation of a username with regex



// function validateUsr(username) {
//   res = /^[a-z0-9_]+$/
//   if (username.length >= 4 && username.length <= 16) return res.test(username)

//   return false
// }

const validateUsr = (username) => {
  return username.length >= 4 &&
    username.length <= 16 &&
    /^[a-z0-9_]+$/.test(username)
}

console.log(validateUsr('asddsa'), true);
console.log(validateUsr('a'), false);
console.log(validateUsr('Hass'), false);
console.log(validateUsr('Hasd_12assssssasasasasasaasasasasas'), false);
console.log(validateUsr(''), false);
console.log(validateUsr('____'), true);
console.log(validateUsr('012'), false);
console.log(validateUsr('p1pp1'), true);
console.log(validateUsr('asd43 34'), false);
console.log(validateUsr('asd43_34'), true);
