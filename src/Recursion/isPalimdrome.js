/**
 * <b> Topic - Recursion</b> <br />
 * Write a recursive function called isPalindrome  which returns true
 * if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.
 * @param {string} str - Input string
 * @returns {boolean} - True it is palindrome
 */
function isPalindrome(str) {
  //base case - if string is empty or only one character left there return  true;
  if (str.length == 0 || str.length == 1) {
    return true;
  }
  //remove first and last char from string
  //ispalindrome(str)
  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.substring(1, str.length - 1));
  }
  //else false
  else {
    return false;
  }
}

console.log(isPalimdrome("tcat"));
