/* return the minimum units of potion Dan needs to drink to jump all of the hurdles.

hurdleRace has the following parameter(s):

k: an integer denoting the height Dan can jump naturally
height: an array of integers denoting the heights of each hurdle */
function hurdleRace(k, height) {
     let potions = 0;

  height.forEach(hurdle => {
    if (hurdle > k) {
      potions += hurdle - k;
      k += hurdle - k;
    }
  });
  return potions;
}