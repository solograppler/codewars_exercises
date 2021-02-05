const invert = (arr) => {
  let result = [];
  arr.forEach((element) => {
    result.push(element * -1);
  });
  return result;
};
