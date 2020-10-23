/**
 * <b> Topic - Searching Algorithms</b> <br />
 * Write a function called linearSearch  which accepts an array and a value,
 * and returns the index at which the value exists. If the value does not exist in the array, return -1.
 * Don't use indexOf to implement this function!
 * @param {Array} arr - Input array
 * @param {number} val - value to be searched in array
 * @returns {number} - Positon at which element found
 *
 */

function linearSearch(arr, val) {
  //loop over array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
  //check if array[key] == val
  //return position
  //return -1
}

console.log(linearSearch([10, 15, 39, 5, 3, 2], 2));
