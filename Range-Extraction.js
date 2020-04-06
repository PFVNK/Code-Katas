//Range Extraction   https://www.codewars.com/kata/51ba717bb08c1cd60f00002f/train/javascript

//Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format. 



function solution(list) {
  for (var i = 0; i < list.length; i++) {
    var j = i;
    while (list[j] - list[j + 1] == -1) j++;
    if (j != i && j - i > 1) list.splice(i, j - i + 1, list[i] + '-' + list[j]);

  } return list.join();
}



console.log(solution(
  [-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]),
  "-6,-3-1,3-5,7-11,14,15,17-20")