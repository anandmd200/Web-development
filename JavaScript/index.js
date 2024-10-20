// higher order functions
let radious = [2, 3, 4, 5];

function area(radious) {
  let output = [];
  for (let i = 0; i < radious.length; i++) {
    output.push(Math.PI * radious[i] * radious[i]);
  }
  return output;
}

function circumfrence(radious) {
  let output = [];
  for (let i = 0; i < radious.length; i++) {
    output.push(2 * Math.PI * radious[i]);
  }
  return output;
}

function diameter(radious) {
  let output = [];
  for (let i = 0; i < radious.length; i++) {
    output.push(2 * radious[i]);
  }
  return output;
}

console.log(area(radious));
console.log(circumfrence(radious));
console.log(diameter(radious));
