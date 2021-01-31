function feast(beast, dish) {
  let beastF = beast.slice(0, 1) + beast.slice(-1);
  let dishF = dish.slice(0, 1) + dish.slice(-1);
  return beastF === dishF;
}
