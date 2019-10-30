/* return an integer that denotes the minimum number of deletions required.

equalizeArray has the following parameter(s):

arr: an array of integers */

function equalizeArray(arr) {
  let map = {},
    count = 0,
    maxCount = 0,
    multipleMaxEntry = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!map[arr[i]]) {
      map[arr[i]] = 1;
    } else {
      map[arr[i]] += 1;
    }
    if (map[arr[i]] > maxCount) {
      maxCount = map[arr[i]];
    }
  }
  if (maxCount === 1) return arr.length - 1;
  for (let j = 0; j < arr.length; j++) {
    if (map[arr[j]] != maxCount) {
      count += 1;
    } else {
      multipleMaxEntry += 1;
    }
  }

  return count + (multipleMaxEntry - maxCount);
}
