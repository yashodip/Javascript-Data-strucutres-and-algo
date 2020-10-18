/**
 * <b> Pattern - Sliding window</b> <br />
 * Write a function called  which accepts two parameters - an array of positive integers and a positive integer.
 * his function should return the minimal length of a contiguous  subarray of which the sum is greater
 * than or equal to the integer passed to the function. If there isn't one, return 0 instead.
 * @param {Array} arr
 * @param {number} sum
 * @returns {number}
 */
function minSubArrayLen(arr, sum) {
  //init result variable to infinity
  let result = Infinity;
  //init left pointer and current sum variable
  let left = 0;
  let cur_val = 0;
  //in loop : make a sum till given value or greater than that
  for (let i = 0; i < arr.length; i++) {
    cur_val += arr[i];
    // again add one more loop to move sum window
    while (cur_val >= sum) {
      //keep track of length of minimum subarray length
      result = Math.min(result, i + 1 - left);
      cur_val -= arr[left];
      left++;
      //keep moving left pointer until current sum is less than or equal to sum
    }
  }
  return result != Infinity ? result : 0;
  //return result if it's not infinity or return 0
}
console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));
