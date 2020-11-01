/**
 * <b>Topic - Sorting algorithms </b><br/>
 * Merge Sort sorting example
 *
 * @param {Array} arr Input  array
 * @param {number} start starting point for sub array
 * @param {number} end ending point for sub array
 */

function pivotHelper(arr, start = 0, end) {
  const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  };
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

function mergeSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivot = pivotHelper(arr, left, right);
    mergeSort(arr, left, pivot - 1);
    mergeSort(arr, pivot + 1, right);
  }
  return arr;
}

console.log(mergeSort([1, 4, 2, 3]));
