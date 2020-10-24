/**
 * <b> Topic - Searching Algorithms</b> <br />
 * Write a function called binarySearch  which accepts a sorted  array and a value and returns
 * the index at which the value exists. Otherwise, return -1.
 * @param {Array} arr
 * @param {number} val
 * @returns {number} Postion at which element found
 */
function binarySearch(arr, val) {
  //init three variables - start middle end
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  //in Loop start : end
  for (let i = 0; i < arr.length; i++) {
    //check if middle is equal to val
    if (arr[middle] === val) {
      //return position
      return middle;
    }
    //calculate start and end and update middle accordingly
    if (arr[middle] < val) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  //not found
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2));
