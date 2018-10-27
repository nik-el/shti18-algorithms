const testArray = [6, -100, 4, 999, -10000, 123];

const selectionSort = (array) => {
  for(let i = 0; i < array.length; i++) {
    let minIndex = i;
    let value = array[i];

    for (let j = i; j < array.length;  j++) {
      if (value > array[j]) {
        value = array[j];
        minIndex = j;
      }
    }

    array[minIndex] = array[i];
    array[i] = value;
  }

  return array;
};

console.log(selectionSort(testArray));
