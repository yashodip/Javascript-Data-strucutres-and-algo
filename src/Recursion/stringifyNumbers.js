let obj1 = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

/**
 * <b> Topic - Recursion</b> <br />
 * Write a function called stringifyNumbers  which takes in an object and finds all of the values
 * which are numbers and converts them to strings.
 * Recursion would be a great way to solve this!
 * @param {Object} obj - Input object with number
 * @returns {object} - Outputobject with stringified number
 */
function stringifyNumbers(obj) {
  let newObj = {};
  for (const key in obj) {
    if (typeof obj[key] === "number") {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

console.log(stringifyNumber(obj1));
