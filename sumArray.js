function sumArray(array) {
  if (array === null || array.length === 0 || array.length === 1) {
    return 0;
  }
  let sum = 0;
  let sorted = array.sort((a, b) => {
    return a - b;
  });
  sorted.shift();
  sorted.pop();

  for (let i = 0; i < sorted.length; i++) {
    sum += sorted[i];
  }

  return sum;
}

let arr = [6, 2, 1, 8, 10];

sumArray(arr);
