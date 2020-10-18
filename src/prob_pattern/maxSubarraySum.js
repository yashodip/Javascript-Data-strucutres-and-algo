/**
 *  <b> Pattern - Sliding window</b> <br />
 * Given an array of integers and a number, write a function calledmaxSubarraySumwhich finds
 * the maximum sum of a subarray with the length of the number passed to the function.Note
 * that a subarray must consist ofconsecutive  elements from the original array. In the first
 * example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.
 * @param {Array} arr - Input array
 * @param {Window} win - sliding window
 * @returns {number}
 */
function maxSubarraySum(arr, win) {
  if (win > arr.length) {
    return null;
  }
  //init sum variable
  let sum = 0;
  let max = 0;
  //do initial sum
  for (let i = 0; i < win; i++) {
    sum += arr[i];
  }
  max = sum;
  //create sliding window for sum with condition to check max subarray sum
  for (let i = win; i < arr.length; i++) {
    sum = sum - arr[i - win] + arr[i];
    if (max < sum) {
      max = sum;
    }
  }
  return max;
}

console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
