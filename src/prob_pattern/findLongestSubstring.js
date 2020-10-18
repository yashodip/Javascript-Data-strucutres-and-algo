/**
 *  <b> Pattern - Sliding window</b> <br/>
 *  Write a function called findLongestSubstring,
 *  which accepts a string and returns the length of the longest substring with all distinct characters.
 * @param {string} str
 * @returns {number}
 */

function findLongestSubstring(str) {
  //init varibles that are required - seen, longest,start
  let seen = {};
  let longest = 0;
  let start = 0;
  //in for loop :
  for (let i = 0; i < str.length; i++) {
    //take out one character and check if it is already present in seen list
    let char = str[i];
    //if true
    if (seen[char]) {
      //  then change the start position
      start = Math.max(start, seen[char]);
    }
    //calculate the longest string and update if required
    longest = Math.max(longest, i - start + 1);
    //add character to seen list
    seen[char] = i + 1;
    console.log({ longest, seen, start, char });
  }

  return longest;
  //return longest
}

console.log(findLongestSubstring("thisisawsome"));
