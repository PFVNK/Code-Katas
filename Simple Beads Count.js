// SIMPLE BEADS COUNT  www.codewars.com/kata/simple-beads-count/train/javascript

// Two red beads are placed between every two blue beads. There are N blue beads. After looking at the arrangement below work out the number of red beads.

// @ @@ @ @@ @ @@ @ @@ @ @@ @

// Implement count_red_beads(N_blue) (in PHP count_red_beads($n); in Java, Javascript countRedBeads(n)) so that it returns the number of red beads.
// If there are less than 2 blue beads return 0.


function countRedBeads(n) {
  return  n > 0 ? (n - 1) * 2 : n;
}