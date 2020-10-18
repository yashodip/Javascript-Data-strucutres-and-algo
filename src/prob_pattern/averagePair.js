//AvgPair - multipointer
/**
 * <b>pattern - multiple pointer </b><br/>
 * Given a sorted array of integers and a target average,
 * determine if there is a pair of values in the array where the average of the pair equals the target average.
 * There may be more than one pair that matches the average target.
 * @param {Array} arr
 * @param {number} avg
 * @returns {boolean}
 */
function averagePair(arr, avg) {
  //Init 2 pointers, one at beginnning and one at end
  let i = 0;
  let j = arr.length;
  let tempAvg = 0;
  let sum = 0;
  //In loop
  // sum those positions and divide it by 2
  while (i < j) {
    sum = arr[i] + arr[j];
    tempAvg = sum / 2;

    if (tempAvg < avg) i++;
    else j--;
    if (tempAvg === avg) {
      return true;
    }
  }
  return false;
  //if outcome is less than required avg value then move beginning pointer
  //if outcome is more than required avg value then move end pointer
}

console.log(averagePair([1, 2, 3, 4, 4, 5], 5));
