// let ans = ((a = 8), a++, (a += 2));
// console.log(ans);

// let [a, b, c] = [34, 72, 12];

// console.log(a, b, c);

// const obj = {
//   product: "Mobile",
//   price: 20000,
//   color: "Blue",
// };

// console.log(obj);

// delete obj.price;

// console.log(obj);

// function* test() {
//   yield 20;
//   yield [1, 2, 3];
//   yield "Hello World";
// }
// let res = test();

// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());

// const nums1 = [10, 20, 30];
// const nums2 = [40, 50, 60];

// const res1 = [nums1, nums2];
// console.log(res1);

// const res = [...nums1, ...nums2];

// console.log(res);

// const car = {
//   gears: 6,
//   color: "Black",
// };

// const BMW = {
//   model: "X5",
//   year: 2019,
//   ...car,
// };

// console.log(BMW);

// let j = 1;
// do {
//   // try to avoide printing 6;
//   j++;
//   if (j == 6) {
//     continue;
//   }
//   console.log("Do-while iteration number: " + j);
// } while (j < 11);

// let arr = [{ fruit: "apple" }, { fruit: "banana" }, { fruit: "cherry" }];

// for (let ele of arr) {
//   console.log(ele.fruit);
// }

// let obj = {
//   brand: "OD",
//   model: "Q7",
//   color: "Black",
// };

// for (key1 in obj) {
//   console.log(key1 + ": " + obj[key1]);
// }

// count frequency of consonents in given string

let mystring = "MY nAmE is alok";
mystring = mystring.toLowerCase();
let count1 = 0;
let count2 = 0;
for (let i = 0; i < mystring.length; i++) {
  switch (mystring[i]) {
    case "a":
      break;
    case "e":
      break;
    case "i":
      break;
    case "o":
      break;
    case "u":
      break;
    case " ":
      break;
    default:
      count1++;
      break;
  }
}

for (let i = 0; i < mystring.length; i++) {
  if (
    mystring[i] == "a" ||
    mystring[i] == "e" ||
    mystring[i] == "i" ||
    mystring[i] == "o" ||
    mystring[i] == "u" ||
    mystring[i] == " "
  ) {
  } else {
    count2++;
  }
}

console.log(mystring);
console.log("Using switch case: ", count1);
console.log("Using control statement: ", count2);
