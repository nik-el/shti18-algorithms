const testArray = [6, -100, 4, 0, -2, 11, 2, -10000, 1];
const resultArray = [];

const selectionSort = (array) => {
  if (!array.length) {
    return resultArray;
  }

  let value = array[0];
  let index = 0;

  for (let i = 0; i < array.length;  i++) {
    if (value > array[i + 1]) {
      value = array[i + 1];
      index = i + 1;
    }
  }

  resultArray.push(value);
  array.splice(index, 1);
  selectionSort(array);

  return resultArray;
};

console.log(selectionSort(testArray));