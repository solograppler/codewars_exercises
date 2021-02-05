const dashatize = (num) => {
  let arr;
  let dashArr = [];
  if (isNaN(num)) {
    return "NaN";
  }
  arr = String(Math.abs(num)).split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[0] && arr[i] % 2 !== 0 && arr[i + 1] % 2 === 0) {
      dashArr.push(arr[i] + "-");
    } else if (arr[i] === arr[0] && arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0) {
      dashArr.push(arr[i]);
    } else if (arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0) {
      dashArr.push("-" + arr[i]);
    } else if (arr[i] % 2 !== 0 && arr[i + 1] % 2 === 0) {
      dashArr.push("-" + arr[i] + "-");
    } else if (arr[i] % 2 !== 0 && arr[i - 1] % 2 !== 0) {
      dashArr.push("-" + arr[i]);
    } else if (arr[i] % 2 !== 0 && arr[i - 1] % 2 === 0) {
      dashArr.push("-" + arr[i]);
    } else {
      dashArr.push(arr[i]);
    }
  }
  return dashArr.join("");
};
