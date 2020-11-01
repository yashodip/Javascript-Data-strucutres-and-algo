function insertionSort(arr) {
  // for loop starts at 1 to array length
  for (let i = 1; i < arr.length; i++) {
    //set current to 1st element of array
    let current = arr[i];
    //for loop from i-1 to 0 and until we find small element than current
    for (var j = i - 1; j >= 0 && arr[j] > current; j--) {
      //keep pushing one element ahead
      arr[j + 1] = arr[j];
    }
    //insert element at proper position
    arr[j + 1] = current;
  }

  //swap it

  return arr;
}

console.log(insertionSort([3, 2, 1, 5, 8]));
