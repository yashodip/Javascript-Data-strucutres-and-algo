/**
 * <b> Topic - Sorting algorithms  </b> <br />
 * Selection Sort
 * @param {Array} arr - input array
 * @returns {Array} - Sorted array
 */
function selectionSort(arr) {
  // swap function
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  //set min =i
  //for loop from 0 to arr.length
  for (let i = 0; i < arr.length; i++) {
    //set min =i
    let min = i;
    //for loop i to arr.length
    for (let j = i + 1; j < arr.length; j++) {
      //check if min > arr[j]
      if (arr[min] > arr[j]) {
        //update the min
        min = j;
      }
    }
    //call swap if min and i are not same
    if (i !== min) {
      swap(arr, i, min);
    }
  }

  return arr;
}

console.log(selectionSort([0, 4, 3, 2, 6, 8, 7, 1]));
