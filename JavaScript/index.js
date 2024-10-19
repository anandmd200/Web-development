/**
 * what is function
 * Function declarations
 * Function statement
 * function Expression
 *
 *
 *
 *
 */

// let a = 10;

// console.log(mysquare(2));

// function mysquare(param) {
//   return param * param;
// }

// console.log(myfun(4, 5));

// const myfun = function multiply(number1, number2) {
//   return number1 * number2;
// };

// call by value

// let number = 10;
// console.log(number);

// function overideValue(number) {
//   number = 20;
// }

// call by refrence

// Expample 1

// overideValue(number);
// console.log(number); // o/p = 10

// let myCar = {
//   color: "White",
//   topSpeed: "200 km/h",
//   company: "Suzuki",
// };

// console.log(myCar);

// function modifyCar(myCar) {
//   myCar.color = "black";
//   console.log("Mycar properties in side function", myCar);
// }

// modifyCar(myCar);
// console.log("Mycar properties out side function", myCar);

// Example 2

// let myarray = [10, 20, 30];
// console.log(myarray);

// function modifyMyArray(myArray) {
//   let sum = 0;
//   myarray.forEach((ele) => {
//     sum += ele;
//   });

//   return sum;
// }

// console.log(modifyMyArray(myarray));

// function scope

// function outerFunction() {
//   let name = "Parent Name";
//   let address = "GKP";

//   function innerFunction() {
//     let childName = "Pintoo";
//     console.log(
//       `my name is ${name} and my address is ${address} and the child Name ${childName}`
//     );
//   }
//   innerFunction();
// }

// outerFunction();

// function multiply(multiplier, ...theArgs) {
//   return theArgs.map((x) => multiplier * x);
// }

// const arr = multiply(2, 1, 2, 3, 4, 5, 6);
// console.log(arr); // [2, 4, 6,8,10,12]

// ES6

// const myfunction = (a, b) => {
//   let ans = a > b ? a : b;

//   console.log("Grater Number : ", ans);
// };

// myfunction(20, 40);

// function calculateLength(s) {
//   return s.length;
// }

// const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

// const a2 = a.map((s) => calculateLength(s));

// console.log(a2); // [8, 6, 7, 9]

// const a3 = a.map((s) => s.length);

// console.log(a3);

// function sayHello() {
//   return "Hello,";
// }

// function greeting(sayHello, name) {
//   console.log(sayHello() + name);
// }

// // Pass `sayHello` as an argument to `greeting` function
// greeting(sayHello, "JavaScript!");

// setTimeout(() => {
//   console.log("My name is Anand!!");
// }, 3000);

// function sayHello(name) {
//   console.log("Hello: ", name);
// }

// function welcomeSomeone(sayHello) {
//   setTimeout(() => {
//     sayHello("Abhishek");
//   }, 3000);

//   let a = "any process ";
//   let b = 10 + 20;

//   console.log(a + b);
// }

// welcomeSomeone(sayHello);
