const resultArray = [];

const getPrimeNumbers = (number) => {
  for (let i = 2; i <= number; i++) {
    let flag = false;

    for (let j = 2; j < i; j++) {
      if ((i / j) % 1 === 0) {
        flag = true;
        break;
      }
    }

    if (!flag) {
      resultArray.push(i);
    }
  }

  return resultArray;
};

console.log(getPrimeNumbers(100));