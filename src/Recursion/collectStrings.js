const obj1 = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};
/**
 * <b> Topic - Recursion</b> <br />
 * Write a function called collectStrings  which accepts an object and returns an array of
 * all the values in the object that have a typeof string
 * @param {object} - Input object
 * @returns {Array} - Output array
 */
function collectStrings(obj) {
  let arr = [];
  for (const key in obj) {
    if (typeof obj[key] === "string") {
      arr.push(obj[key]);
    }
    if (typeof obj[key] === "object") {
      arr = arr.concat(collectStrings(obj[key]));
    }
  }
  return arr;
}

console.log(collectStrings(obj1));
