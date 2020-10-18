/**
 * Write a function called productOfArray()  which takes in an array of numbers and returns the product of them all.
 * @param {Array} arr Input array
 * @returns {number}
 *
 */
function productOfArray(arr) {
  //check base condition for arr[0] === null
  if (!arr.length) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1, 2, 3, 4, 5]));
