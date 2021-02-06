const dashatize = (num) => {
  if (isNaN(num)) {
    return "NaN";
  }

  const isOdd = (i) => i % 2 !== 0;

  const arr = String(Math.abs(num)).split("");
  const dashArr = [];
  for (let i = 0, count = arr.length; i < count; ++i) {
    if (!isOdd(arr[i])) {
      dashArr.push(arr[i]);
      continue;
    }

    dashArr.push(
      [
        i === 0 || isOdd(arr[i - 1]) ? "" : "-",
        arr[i],
        i === count - 1 ? "" : "-",
      ].join("")
    );
  }
  return dashArr.join("");
};
