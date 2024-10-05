# JavaScript operator:

## The typeof Operator:

- The typeof operator in JavaScript is a unary operator used to get the data type of a particular variable.

```javascript
typeof 10; // returns 'number'
typeof "Hello World"; // returns 'string'
typeof true; // returns 'boolean'
typeof { name: "Tutorialspoint" }; // returns 'object'
typeof function foo() {}; // returns 'function'
typeof undefined; // returns 'undefined'
typeof null; // returns 'object'
typeof 10n; // returns 'bigint'
```

## Nullish Coalescing Operator

The Nullish Coalescing operator in JavaScript is represented by two question marks `(??)`. It takes two operands and returns the `first` operand if it is `not null` or `undefined`.

```javascript
let x = null;
let y = x ?? 5;

const arr = [65, 2, 56, 2, 3, 12];
const arr1 = arr ?? [];
```

## Delete Operator

The JavaScript delete operator deletes/ removes a property from an object. It removes the property as well as value of the property from the object. It works only with the objects not with the variables or functions.

```javascript
const obj = {
  product: "Mobile",
  price: 20000,
  color: "Blue",
};
delete obj.price;
```

## Comma Operator

The comma operator (,) in JavaScript evaluates the multiple expression from left to right.

```javascript
let ans = ("JavaScript", "Python", "HTML", "CSS");

let ans = ((a = 8), a++, (a += 2));

for (let p = 0, q = 1; p < n; p++, q++) {
  p = p++;
  console.log(p + q);
}

let [a, b, c] = [34, 72, 23];

console.log(a, b, c);
```

## Yield Operator

The yield operator in JavaScript is used to pause and resume the generator function asynchronously.

When a generator function is called, it returns a generator object. When the next() method this generator object is called it resumes the execution of the generator function. When a yield expression is encountered, it pauses the execution and returns the expression after yield keyword to the object's caller (the next() method).

The next() method of the generator object returns an iterator object with two properties – value and done. The value is the actual value of the expression and the done is a boolean value. The done property is true if the execution of the generator function is completely executed, else it if false.

```javascript
function* test() {
  yield 20;
  yield [1, 2, 3];
  yield "Hello World";
}
let res = test();
console.log(res.next());
console.log(res.next());
console.log(res.next());
console.log(res.next());
```

## Spread Operator?

The JavaScript spread operator (…) allows us to spread out elements of an iterable such as an array.

```javascript
const nums1 = [10, 20, 30];
const nums2 = [40, 50, 60];
const res = [...nums1, ...nums2];

const car = {
  gears: 6,
  color: "Black",
};

const BMW = {
  model: "X5",
  year: 2019,
  ...car,
};
```

## Exponentiation Operator

```javascript
let pow = x ** y;
```

# JavaScript Control Flow

## if-else

```javascript
if (expression 1) {
   Statement(s) to be executed if expression 1 is true
} else if (expression 2) {
   Statement(s) to be executed if expression 2 is true
} else if (expression 3) {
   Statement(s) to be executed if expression 3 is true
} else {
   Statement(s) to be executed if no expression is true
}
```

## loops

```javaScript

// for loop

for (initialization; condition; update) {
  // code to be executed
}

for (let i = 0; i < 5; i++) {
  console.log("Iteration number: " + i);
}


// while loop

let i = 0;
while (i < 5) {
  console.log("While iteration number: " + i);
  i++;
}


// do while

let j = 0;
do {
  console.log("Do-while iteration number: " + j);
  j++;
} while (j < 5);



//for...of loop

let arr = ['apple', 'banana', 'cherry'];
for (let fruit of arr) {
  console.log(fruit);
}


// for...in loop

let obj = {
    brand: "OD",
    model: "Q7",
    color: "Black",
}
for (key in obj) {
    console.log(key + ": " + obj[key]);
}

```

## Break and continue

In JavaScript, break and continue are used to control the flow of loops;

```javascript
//break

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Exit the loop when i is 5
  }
  console.log(i);
}

//continue

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue; // Skip the current iteration when i is 5
  }
  console.log(i);
}

// combined example

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue; // Skip iteration when i is 3
  }
  if (i === 7) {
    break; // Exit the loop when i is 7
  }
  console.log(i);
}
```

## Switch case

The switch statement in JavaScript is used to perform different actions based on different conditions. It is an alternative to multiple if...else if statements when you need to compare a value to several potential options.

```javascript
let today = new Date(); // Get the current date
let dayOfWeek = today.getDay(); // Get the current day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)

switch (dayOfWeek) {
  case 0:
    console.log("Today is Sunday");
    break;
  case 1:
    console.log("Today is Monday");
    break;
  case 2:
    console.log("Today is Tuesday");
    break;
  case 3:
    console.log("Today is Wednesday");
    break;
  case 4:
    console.log("Today is Thursday");
    break;
  case 5:
    console.log("Today is Friday");
    break;
  case 6:
    console.log("Today is Saturday");
    break;
  default:
    console.log("Invalid day");
}

// what if won't use break statement

let today = new Date();
let dayOfWeek = today.getDay();

switch (dayOfWeek) {
  case 0:
    console.log("Today is Sunday");
  case 1:
    console.log("Today is Monday");
  case 2:
    console.log("Today is Tuesday");
  case 3:
    console.log("Today is Wednesday");
  case 4:
    console.log("Today is Thursday");
  case 5:
    console.log("Today is Friday");
  case 6:
    console.log("Today is Saturday");
    break;
  default:
    console.log("Invalid day");
}

/*
output : 

Today is Wednesday
Today is Thursday
Today is Friday
Today is Saturday

*/
```

## count the vowels in a given string

```javascript
let str = "Hello world";
let count = 0;
let lowerStr = str.toLowerCase(); // Convert the string to lowercase to handle both uppercase and lowercase vowels

for (let i = 0; i < lowerStr.length; i++) {
  let char = lowerStr[i];

  // Switch to check for vowels
  switch (char) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      count++;
      break;
  }
}

console.log("Number of vowels:", count);
```

## count frequency of consonant:

```js
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
```
