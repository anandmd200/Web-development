let arr = [2, 3, 4, 5];

function area(r) {
  return Math.PI * r * r;
}

function circumfrence(r) {
  return 2 * Math.PI * r;
}

function diameter(r) {
  return 2 * Math.PI * r;
}

function calculate(logic, arr) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(logic(arr[i]));
  }
  return output;
}

console.log(calculate(area, arr));
console.log(calculate(circumfrence, arr));
console.log(calculate(diameter, arr));
