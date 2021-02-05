const dashatize = (num) => {
  let arr;
  let dashArr = [];
  if (isNaN(num)) {
    return NaN;
  }
  arr = String(Math.abs(num)).split("");
  for (let i = 1; i < arr.length; i++) {
    if (isOdd(arr[i])) {
      dash;
    }
  }

  console.log(arr);
};

dashatize(-28369);
