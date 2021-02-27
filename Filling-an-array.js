//Filling an array



const arr = N => arr.length ? [...Array(N).keys()] : []



console.log(arr(5), [0, 1, 2, 3, 4])
console.log(arr(0), [])
