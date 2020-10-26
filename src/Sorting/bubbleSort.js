/**
 * <b> Topic - Sorting algorithms  </b> <br />
 * Bubble Sort
 * @param {Array} arr input array
 * @returns {Array} sorted array
 */

function bubbleSort(arr) {
  //create a function for swapping values
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  //for loop in decrement manner
  for (let i = arr.length - 1; i >= 0; i--) {
    let flag = false;
    //second for loop from 0 to i
    for (let j = 0; j < i; j++) {
      // check if current element is greater than next element
      if (arr[j] > arr[j + 1]) {
        //swap
        swap(arr, j, j + 1);
        flag = true;
      }
      console.log(i + " " + j);
    }
    if (flag === false) {
      return arr;
    }
  }

  return arr;
}

console.log(bubbleSort([100, 1, 7, 2, 3, 8, 4, 5]));
