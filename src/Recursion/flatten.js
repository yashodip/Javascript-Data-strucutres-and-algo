/**
 * <b>Topic - Recursion</b> <br />
 * Write a recursive function called flatten  which accepts an array of arrays and returns a new
 * array with all values flattened.
 * e.g flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
 * @param {Array} arr
 * @returns {Array}
 */
function flatten(arr) {
  //new array to store flat array
  let newArr = [];
  //loop through arr to get value
  for (let i = 0; i < arr.length; i++) {
    //if current value of array is array then make a recursive call until we make it flat.
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(flatten(arr[i]));
    } else {
      //current value is alphanumeric character then push it on to array
      newArr.push(arr[i]);
      console.log(newArr);
    }
  }
  return newArr;
}

console.log(flatten([1, 2, [[[3]]], [[[[[[[4]], [[[5]]]]]]]]]));
