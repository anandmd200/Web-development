//Oerators : Arithmatic

let a = (((12 + 13 - 1) * 2) / 2) % 5;

a = ++a;

console.log(a);

//relational

// <, >, <= , >= , ==, != , ===, !==,

let num1 = 10;
let num2 = 10;
let num3 = 10;

if (num1 > num2 && num1 > num3) {
  console.log(`Num1 is grater : ${num1}`);
} else if (num2 > num1 && num2 > num3) {
  console.log(`Num2 is grater : ${num2}`);
} else if (num3 > num1 && num3 > num2) {
  console.log(`Num3 is grater : ${num3}`);
} else {
  console.log("All numbre are equal.");
}

let ans =
  num1 > num2 && num1 > num3
    ? "num1 is grater"
    : num2 > num1 && num2 > num3
    ? "number 2 is grater "
    : num3 > num1 && num3 > num2
    ? "num3 is grater"
    : "All number are equal";

console.log(ans);
