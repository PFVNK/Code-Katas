function narsNum (num) {
	let power = num.toString().length;
	let splitNum = num.toString()
						.split('')
						.map(x => Math.pow(x, power))
						.reduce((total, number) => {return total + number});
	let final = num == splitNum ? true : false;					
	return final;
}

console.log(narsNum(145));
console.log(narsNum(153));
console.log(narsNum(1634));