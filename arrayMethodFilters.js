const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

const getCharMass100 = characters.filter((char) => char.mass > 100);
const getCharHeight200 = characters.filter((char) => char.height < 200);
const getMaleChars = characters.filter((char) => char.gender === "male");
const getFemaleChars = characters.filter((char) => char.gender === "female");

console.log(getCharMass100);
console.log(getCharHeight200);
console.log(getMaleChars);
console.log(getFemaleChars);
