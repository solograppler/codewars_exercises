const findMultiples = (integer, limit) => {
  let result = [];
  let i = 1;
  while (integer * i <= limit) {
    result.push(integer * i);
    i++;
  }
  return result;
};
