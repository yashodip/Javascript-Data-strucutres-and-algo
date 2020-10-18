/**
 * <b> pattern - frequency counter </b> <br/>
 * Given two strings, write a function to determine if the second string is an anagram of the first.
 *  An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema ,
 *  formed from iceman.
 * @param {string} str1
 * @param {string} str2
 * @returns {boolean}
 */

function validAnagram(str1, str2) {
  let obj1 = {};
  let obj2 = {};
  //check the length of string 1 and string 2
  if (str1.split("").length != str2.split("").length) {
    return false;
  }

  //count number of character in string 1 and string 2
  for (val of str1) {
    obj1[val] = (obj1[val] || 0) + 1;
  }
  for (val of str2) {
    obj2[val] = (obj2[val] || 0) + 1;
  }
  //check if each character frequency is same
  for (key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

console.log(validAnagram("anagram", "nagaram"));
