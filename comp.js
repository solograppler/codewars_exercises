function comp(array1, array2) {
  if (array1 === null || array2 === null) {
    return false;
  }
  const sortArr = (arr) => {
    return arr.sort((a, b) => {
      return a - b;
    });
  };

  let sortedA1 = sortArr(array1);
  let sortedA2 = sortArr(array2);

  for (let i = 0; i < sortedA1.length; i++) {
    if (sortedA1[i] === sortedA2[i] ** 2 || sortedA1[i] ** 2 === sortedA2[i]) {
      return true;
    }
  }
  return false;
}

function comp1(array1, array2) {
  if (array1 === null || array2 === null) return false;
  array1.sort((a, b) => a - b);
  array2.sort((a, b) => a - b);
  return array1.map((e) => e * e).every((e, i) => e == array2[i]);
}

let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
let a2 = [
  11 * 11,
  121 * 121,
  144 * 144,
  19 * 19,
  161 * 161,
  19 * 19,
  144 * 144,
  19 * 19,
];
console.log(comp(a1, a2));
