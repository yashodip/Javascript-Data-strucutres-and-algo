/** Check if input value is odd
 * @param {number} val - to check if it's odd
 * @returns {boolean}
 */
const isOdd = (val) => val % 2 !== 0;
/**
 * Topic - Recursion
 * Write a recursive function called someRecursive  which accepts an array and a callback.
 * The function returns true if a single value in the array returns true when passed to the callback.
 * Otherwise it returns false.
 * @param {Array} arr -  input array to check
 * @param {Function} isOdd - callback
 * @returns { boolean}
 */
function someRecursive(arr, isOdd) {
  if (!arr.length) {
    return false;
  }
  if (isOdd(arr[0])) {
    return true;
  } else {
    return someRecursive(arr.slice(1), isOdd);
  }
}

console.log(someRecursive([1, 2, 4], isOdd));
