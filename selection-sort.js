const testArray = [6, -100, 4, 999, -10000, 123];

const selectionSort = (array) => {
  for(let i = 0; i < array.length; i++) {
    let minIndex = i;

    for (let j = i; j < array.length;  j++) {
      if (array[i] > array[j]) {
        minIndex = j;
      }
    }

    let minValue = array[minIndex];
    array[minIndex] = array[i];
    array[i] = minValue;
  }

  return array;
};

console.log(selectionSort(testArray));
