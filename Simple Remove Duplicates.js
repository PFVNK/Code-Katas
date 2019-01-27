// SIMPLE REMOVE DUPLICATES https://www.codewars.com/kata/simple-remove-duplicates

// In this Kata, you will remove the left-most duplicates from a array/list of integers and return the result.

function solve(arr) {
    let singleArr = []
    arr = arr.reverse()

    for (let i = 0; i < arr.length; i++) {
        if (singleArr.includes(arr[i]) == false) {
            singleArr.push(arr[i])
        }
    }
    return singleArr.reverse()
}
