const fizzBuzz = (x) => {
  for (let i = 1; i < x; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i, "fizzbuzz");
    } else if (i % 3 === 0) {
      console.log(i, "fizz");
    } else if (i % 5 === 0) {
      console.log(i, "buzz");
    }
  }
};
