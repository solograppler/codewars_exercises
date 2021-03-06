function alphabetPositionW(text) {
  let str = text.toLowerCase();
  let anum = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };
  if (str.length == 1) return anum[str];
  let result = text.split("").map(alphabetPosition);
  return []
    .concat(...result)
    .filter((number) => number)
    .join(" ");
}

function alphabetPosition(text) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphaPos = [];

  text = text.toLowerCase();

  for (let i = 0; i < text.length; i++) {
    let index = alphabet.indexOf(text[i]);

    if (index === -1) {
      continue;
    } else {
      alphaPos.push(index + 1);
    }
  }
  return alphaPos.join(" ");
}

let crazy = alphabetPosition("The sunset sets at twelve o' clock.");
console.log(crazy);
