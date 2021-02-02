const positiveSum = (arr) => {
  let arrSum = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      continue;
    } else {
      arrSum.push(arr[i]);
    }
  }
  return arrSum.reduce((a, b) => a + b, 0);
};
