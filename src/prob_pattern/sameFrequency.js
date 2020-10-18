/**
 * <b>Pattern - Frequency counting  </b> <br />
 * Write a function called sameFrequency.
 * Given two positive integers, find out if the two numbers have the same frequency of digits.
 * Pattern - Frequency counter
 * @param {number} num1
 * @param {number} num2
 * @return {boolean}
 */
function sameFrequency(num1, num2) {
  let obj1 = {};
  let obj2 = {};

  //repeat below 2 steps for both numbers
  //take a number divide it and store it in object.
  let temp = 0;
  while (num1 != 0) {
    temp = num1 % 10;
    num1 = num1 / 10;
    num1 = Math.floor(num1);
    //if number repeats increment the counter in object or init to 1
    obj1[temp] = (obj1[temp] || 0) + 1;
  }
  while (num2 != 0) {
    temp = num2 % 10;
    num2 = num2 / 10;
    num2 = Math.floor(num2);
    obj2[temp] = (obj2[temp] || 0) + 1;
  }
  console.log({ obj1, obj2 });

  //check if frequency of number is same.
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

console.log(sameFrequency(131, 112));
