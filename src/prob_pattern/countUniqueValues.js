/**
 * <b>pattern - multiple pointer</b> <br />
 *
 * Implement a function called countUniqueValues, which accepts a sorted array,
 * and counts the unique values in the array.
 * There can be negative numbers in the array, but it will always be sorted.
 * @param {*} param0
 */

function countUniqueValues([...arr]) {
  // init two pointers one after another
  let i = 0;
  let j = 1;
  //move second pointer until we get different value then increment first pointer by 1
  // move second pointer's unique value to first pointer
  //else increment seconf pointer

  if (arr.length === 0) {
    return 0;
  }
  while (arr.length > j) {
    if (arr[i] != arr[j]) {
      i++;
      arr[i] = arr[j];
    } else {
      j++;
    }
  }
  return i + 1;
}

console.log(countUniqueValues([1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4]));
