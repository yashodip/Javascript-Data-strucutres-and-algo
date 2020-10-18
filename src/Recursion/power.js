/**
 * <b> Topic - Recursion</b> <br />
 * Write a function called power which accepts a base and an exponent. The function should return the power of
 * the base to the exponent. This function should mimic the functionality of Math.pow()
 * - do not worry about negative bases and exponents.
 * @param {number} base
 * @param {number} exp
 * @returns {number}
 *
 */

function power(base, exp) {
  //check if base is 0 ; return 0
  if (base === 0) {
    return 0;
  }
  //check if exponent is 0 ; return 1

  if (exp === 0) {
    return 1;
  }
  //return base * power(base , exp-1)
  return base * power(base, exp - 1);
}

console.log(power(4, 5));
