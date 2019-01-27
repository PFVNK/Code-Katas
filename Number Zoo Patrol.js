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
