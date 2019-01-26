// Number Zoo Patrol  https://www.codewars.com/kata/number-zoo-patrol/train/javascript

//Write a function that takes a shuffled array of unique numbers from 1 to n with one element missing 
//(which can be any number including n). Return this missing number.


function findNumber(array) {
    array = array.sort((a, b) => a - b);

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== (i + 1)) {
            return (i + 1)
        }
    }

    return array.length + 1
}


console.log(findNumber([1, 3, 4, 5, 6, 7, 8]), 2);
console.log(findNumber([7, 8, 1, 2, 4, 5, 6]), 3);
console.log(findNumber([1, 2, 3, 5]), 4);
console.log(findNumber([1, 3]), 2);
console.log(findNumber([2, 3, 4]), 1);
console.log(findNumber([13, 11, 10, 3, 2, 1, 4, 5, 6, 9, 7, 8]), 12);
console.log(findNumber([1, 2, 3]), 4);