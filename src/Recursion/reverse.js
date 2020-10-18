/**
 * <b> Topic - Recursion</b> <br />
 * Write a recursive function called <strong>reverse</strong> which accepts a string and returns a new string in reverse.
 */

function reverse(str) {
  //base case if string = null return
  if (str === "") {
    return "";
  }
  return reverse(str.substr(1)) + str.charAt(0);
}

console.log(reverse("hello"));
