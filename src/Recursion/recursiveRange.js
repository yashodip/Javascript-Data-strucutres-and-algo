/**
 *  <b> Topic - Recursion</b> <br />
 *  Write a function called recursiveRange  which accepts a number and adds up all the
 *  numbers from 0 to the number passed to the function
 * @param {number} num Input number
 * @returns {number}
 *
 */
function recursiveRange(num) {
  if (!num) {
    return 0;
  }
  return num + recursiveRange(--num);
}

console.log(recursiveRange(10));
