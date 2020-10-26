/**
 * <b>Topic - Sorting algorithms </b><br/>
 * Builtin js sorting example
 * @param {Array} arr - input array
 * @returns {Array} - output sorted array
 */
function builtinSort(arr) {
  /**
   * This is custom comparator function
   * @param {*} a
   * @param {*} b
   * @returns {number}
   */
  function sortData(a, b) {
    if (a.item1 == b.item1) {
      return a.item2 > b.item2 ? 1 : a.item2 < b.item2 ? -1 : 0;
    }
    return a.item1 > b.item1 ? 1 : -1;
  }

  arr = arr.sort(sortData);
  return arr;
}
console.log(
  builtinSort([
    { item1: "a", item2: "z" },
    { item1: "a", item2: "k" },
    { item1: "a", item2: "n" },
  ])
);
