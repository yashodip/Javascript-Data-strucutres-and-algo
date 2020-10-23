/** Check if input value is odd
 * @param {number} val - to check if it's odd
 * @returns {boolean}
 */
const isOdd = (val) => val % 2 !== 0;
/**
 * <b> Topic - Recursion</b> <br />
 * Write a recursive function called someRecursive  which accepts an array and a callback.
 * The function returns true if a single value in the array returns true when passed to the callback.
 * Otherwise it returns false.
 * @param {Array} arr -  input array to check
 * @param {Function} isOdd - callback
 * @returns { boolean}
 */
function someRecursive(arr, isOdd) {
  // check if there is element in array
  if (!arr.length) {
    return false;
  }
  //check if first value of array is odd then return true
  if (isOdd(arr[0])) {
    return true;
  } else {
    //if there are element available then remove one element and call to someRecursive
    return someRecursive(arr.slice(1), isOdd);
  }
}

console.log(someRecursive([1, 2, 4], isOdd));
