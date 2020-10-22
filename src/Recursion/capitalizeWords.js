/**
 * Write a recursive function called capitalizeWords.
 * Given an array of words, return a new array containing each word capitalized.
 * @param {Array} words - Array of string
 * @returns {Array} - Capitalized Array
 */
function capitalizeWords(words) {
  if (words.length === 1) {
    return [words[0].toUpperCase()];
  }
  let res = capitalizeWords(words.slice(0, -1));
  res.push(words[words.length - 1].toUpperCase());
  return res;
}

console.log(capitalizeWords(["abc", "xyz", "pqr"]));
