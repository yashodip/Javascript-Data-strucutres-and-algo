//multiple pointer - isSubSequence

/**
 * <b>pattern - multiple pointer</b> <br />
 * which takes in two strings and checks whether the characters in the first string form a subsequence of the
 * characters in the second string. In other words, the function should check whether the characters
 * in the first string appear somewhere in the second string, without their order changing.
 * @param {string} str1
 * @param {string} str2
 *
 * @returns {boolean}
 */
function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;
  if (!str1.length) return true;
  while (j < str2.length) {
    if (str1[i] === str2[j]) i++;
    if (str1.length == i) return true;
    j++;
  }
  return false;
}

console.log(isSubsequence("Heo", "Helo World"));
