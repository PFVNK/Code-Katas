//The falling speed of petals



function sakuraFall(v) {
  if (v < 0) return 0
  return 400 / v
}

const sakuraFall = v => v < 0 ? 0 : 400 / v

console.log(sakuraFall(5), 80);
console.log(sakuraFall(10), 40);
console.log(sakuraFall(-1), 0);
