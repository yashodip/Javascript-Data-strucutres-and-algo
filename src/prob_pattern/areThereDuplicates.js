/**
 * <b>pattern - Frequency counter</b><br/>
 * Implement a function called, areThereDuplicates,  which accepts a variable number of arguments,
 * and checks whether there are any duplicates among the arguments passed in.
 * You can solve this using the frequency counter pattern OR the multiple pointers pattern.
 * @param  {...any} arg
 * @returns {boolean}
 */
function areThereDuplicates(...arg) {
  let i = 0;
  let j = 0;

  //create empty obj to store frequency
  let obj1 = {};
  //iterate over array and find frequency
  for (let val of arg) {
    obj1[val] = (obj1[val] || 0) + 1;
    //if frequency of any item updates more than once ; return true
    if (obj1[val] > 1) {
      console.log(obj1);
      return true;
    }
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3));
