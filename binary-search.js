const testArray = [1, 2, 3, 5, 6, 7, 8, 9];

const findValue = (array, value) => {
  let start = 0;
  let end = array.length - 1;

  while(start <= end) {
    const ind = Math.floor((start + end) / 2);

    if (array[ind] === value) {
      return ind;
    } else if (value < array[ind]) {
      end = ind - 1
    } else {
      start = ind + 1
    }
  }

  return -1;
};

findValue(testArray, 3);