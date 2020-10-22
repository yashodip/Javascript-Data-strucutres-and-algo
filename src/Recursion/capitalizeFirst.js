/**
 * <b> Topic - Recursion</b> <br />
 * Write a recursive function called capitalizeFirst .
 * Given an array of strings, capitalize the first letter of each string in the array.
 * @param {Array} array - Input array
 * @returns {Array} - Output
 */
function capitalizeFirst(array) {
  if (array.length === 1) {
    return [array[0].charAt(0).toUpperCase() + array[0].substr(1)];
  }
  let res = capitalizeFirst(array.slice(0, -1));
  res.push(
    array
      .slice(array.length - 1)[0]
      .charAt(0)
      .toUpperCase() + array[array.length - 1].substr(1)
  );
  return res;
}

console.log(capitalizeFirst(["abc", "xyz", "pqr"]));

//
