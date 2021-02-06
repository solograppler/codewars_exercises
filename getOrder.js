// function getOrder(input) {
//   let menu = [
//     "burger",
//     "fries",
//     "chicken",
//     "pizza",
//     "sandwich",
//     "onionrings",
//     "milkshake",
//     "coke",
//   ];
//   let order = [];
//   menu.some((word) => {
//     if (input.includes(word)) {
//       order.push(word);
//     }
//   });
//   let fixedOrder = order.map((e) => e.charAt(0).toUpperCase() + e.slice(1));
//   return fixedOrder.join(" ");
// }

// //getOrder("milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza");

// function getOrderAlt(input) {
//   let menu = [
//     "Burger",
//     "Fries",
//     "Chicken",
//     "Pizza",
//     "Sandwich",
//     "Onionrings",
//     "Milkshake",
//     "Coke",
//   ];
//   result = "";
//   menu.forEach((element) => {
//     if (input.includes(element.toLowerCase())) {
//       for (let i = 0; i < input.length; ++i) {
//         result += element + " ";
//       }
//     }
//   });
//   return result;
// }

// // console.log(
// //   getOrderAlt("milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza")
// // );

function getOrderHi(input) {
  let menu = [
    "burger",
    "fries",
    "chicken",
    "pizza",
    "sandwich",
    "onionrings",
    "milkshake",
    "coke",
  ];
  let order = [];
  for (let i = 0; i < menu.length; i++) {
    order.push(input.match(new RegExp(`${menu[i]}`, "gi")));
  }
  //   let fixedOrder = order.map((e) => e.charAt(0).toUpperCase() + e.slice(1));
  //   return fixedOrder.join(" ");
  return order;
}
console.log(
  getOrderHi("milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza")
);
