function remove(s, n) {
  let origin = s;
  while (n) {
    origin = origin.replace(/!/, "");
    n -= 1;
  }
  return origin;
}
