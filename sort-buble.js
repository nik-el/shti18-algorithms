const testArray = [-7, 4, 5, 1, 2, -2];

const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++ ) {
    let swap = false;
    for (let j = 0; j < array.length; j++) {
      if (array[i] < array[j]) {
        const value = array[i];
        array[i] = array[j];
        array[j] = value;
        swap = true;
      }
    }
    if (!swap) {
      return array;
    }
  }
  return array;
};

console.log(bubbleSort(testArray));