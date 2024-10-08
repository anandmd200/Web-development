# What is JavaScript:

JavaScript is a programming language that adds interactivity to your website. This happens in games, in the behaviour of responses when buttons are pressed or with data entry on forms; with dynamic styling; with animation, etc.

1. It was invented by Brendan Eich.
2. It is an interpreted programming language with object-oriented capabilities.
3. JavaScript is a single-threaded programming language that we can use for client-side or server-side development.

## Limitation of JavaScript:

1. Client-side JavaScript does not allow the reading or writing of files. This has been kept for security reasons.
2. JavaScript doesn't have any multi-threading capabilities.

## Features:

- **Built-in Objects**: JavaScript provides built-in objects like Math for mathematical operations and Date for date manipulations. These objects can be extended or modified.

- **Object Prototypes**: In JavaScript, everything is an object (arrays, functions, numbers, etc.). Objects contain hidden prototypes, which allow inheritance and the extension of functionality between objects.

- **Global Object**: JavaScript has a global object that allows access to globally available variables. In browsers, it's accessed through the window object, in Node.js via global, and recently, globalThis has been introduced to standardize global access across environments.

- **Built-in Methods**: JavaScript objects have built-in methods to simplify coding, such as `filter()` and `sort()` for arrays, or `replace()` and `trim()` for strings.

- **Modular Programming**: JavaScript supports modular code organization, allowing developers to write and maintain code in separate modules that can be reused across different parts of an application.

- **JSON**: JavaScript Object Notation (JSON) is a format for data exchange between servers and clients. JavaScript natively supports the use of JSON.

- **Asynchronous Programming**: As JavaScript is single-threaded, it supports asynchronous programming using promises to handle multiple tasks concurrently for better performance.

## JavaScript - Placement in HTML File:

## 1. Script in `<head>...</head>` section

```html
<html>
  <head>
    <script type="text/javascript">
      function sayHello() {
        alert("Hello World");
      }
    </script>
  </head>

  <body>
    <input type="button" onclick="sayHello()" value="Say Hello" />
  </body>
</html>
```

## 2. Script in `<body>...</body>` section

```html
<html>
  <head></head>
  <body>
    <script type="text/javascript">
      document.write("Hello World");
    </script>
    <p>This is the web page body</p>
  </body>
</html>
```

## 3. Script in both `<head>...</head>` and `<body>...</body>` sections

```html
<html>
  <head>
    <script type="text/javascript">
      function sayHello() {
        alert("Hello World");
      }
    </script>
  </head>

  <body>
    <script type="text/javascript">
      document.write("Hello World");
    </script>
    <input type="button" onclick="sayHello()" value="Say Hello" />
  </body>
</html>
```

## 4. Script in an external file included in `<head>...</head>` section

```html
<html>
  <head>
    <script type="text/javascript" src="filename.js"></script>
    <script src="filename1.js"></script>
    <script src="filename2.js"></script>
    <script src="filename3.js"></script>
  </head>

  <body>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js"></script>
  </body>
</html>
```

## JavaScript - Console.log():

The `console.log()` is one of the most important methods in JavaScript. It is used to print the message in the web console.

# JavaScript Variables

In JavaScript, variables are containers that store data values. They allow you to reference and manipulate data in your program. Here’s a brief explanation of JavaScript variables:

## 1. Declaration

- Variables can be declared using `var`, `let`, or `const`.

  - `var`: The old way to declare variables. Has function-level scope.
  - `let`: Block-scoped, meaning it only exists within the block where it's defined.
  - `const`: Block-scoped as well but must be assigned a value when declared, and that value cannot be reassigned.

  ```javascript
  var x = 5; // Global or function scope
  let y = 10; // Block scope
  const z = 15; // Block scope and cannot be reassigned
  ```

## 2. Hoisting

- JavaScript variables declared with `var` are hoisted to the top of their scope and can be accessed before initialization (but their value will be `undefined`).
- Variables declared with `let` and `const` are also hoisted but cannot be accessed before they are declared (temporal dead zone).

  ```javascript
  console.log(a); // undefined
  var a = 5;

  console.log(b); // ReferenceError: Cannot access 'b' before initialization
  let b = 10;
  ```

## 3. Scope

- **Global Scope**: Variables declared outside any function or block are globally scoped and accessible anywhere in the program.
- **Function Scope**: Variables declared within a function using `var` are only accessible inside that function.
- **Block Scope**: Variables declared with `let` or `const` inside a block `{}` are only accessible within that block.

  ```javascript
  if (true) {
    let x = 10; // Block scope
    var y = 20; // Function/global scope
  }
  console.log(x); // Error: x is not defined
  console.log(y); // Outputs: 20
  ```

## 4. Reassignment and Redeclaration

- **`var`**: Can be redeclared and reassigned.
- **`let`**: Can be reassigned but not redeclared in the same scope.
- **`const`**: Cannot be redeclared or reassigned (though if it holds an object, the properties of that object can still be modified).

  ```javascript
  var x = 5;
  var x = 10; // Redeclaration allowed with var

  let y = 15;
  // let y = 20;  // Redeclaration not allowed with let

  const z = 25;
  // z = 30;      // Reassignment not allowed with const
  ```

## 5. Dynamic Typing

- JavaScript variables are dynamically typed, meaning you can store different types of values in the same variable without specifying its type.

  ```javascript
  let variable = 10; // Number
  variable = "Hello"; // String
  variable = true; // Boolean
  ```

## Summary

- Use `let` and `const` in modern JavaScript code for better scoping and avoid issues caused by `var`.
- `const` should be used when the value should not change, and `let` for variables that will change.

## Data Type:

Data types in JavaScript referes to the types of the values that we are storing or working with. One of the most fundamental characteristics of a programming language is the set of data types it supports. These are the type of values that can be represented and manipulated in a programming language.

JavaScript data types can be categorized as `primitive` and `non-primitive (object)`. JavaScript (ES6 and higher) allows you to work with seven primitive data types −

- **Strings** of text e.g. "This text string" etc.
  ```javascript
  let name = "John Doe"; // Using double quotes
  let greeting = "Hello!"; // Using single quotes
  let fullGreeting = `Hi, ${name}`; // Template literal with embedded variables
  ```
- **Numbers**, eg. 123, 120.50 etc.
  ```javascript
  let age = 25; // Integer
  let price = 19.99; // Floating-point number
  let largeNumber = 1e6; // Exponential notation (1 million)
  ```
- **Boolean** e.g. true or false.
  ```javascript
  let isStudent = true;
  let hasGraduated = false;
  ```
- **null**: Null is a special type that represents the intentional absence of a value. It is often used to signify that a variable should have "no value."
  ```javascript
  let job = null;
  ```
- **undefined**: When a variable is declared but has not been assigned a value, its default value is undefined.
  ```javascript
  let salary; // Salary is declared but not assigned a value, so it's undefined
  ```
- **BigInt**: `BigInt` is used to represent numbers larger than the safe integer limit for Number (2^53 - 1). It is useful for dealing with very large numbers.
  ```javascript
  let bigNumber = 9007199254740991n; // Notice the "n" at the end
  ```
- Symbol

### BigInt and Symbol are introduced in ES6. In ES5, there were only five primitive data types

In addition to these primitive data types, JavaScript supports a composite data type known as object. We will cover objects in detail in a separate chapter.

The Object data type contains the 3 sub-data types −

- **Object**
  ```javascript
  let person = {
    name: "Alice",
    age: 30,
    greet: function () {
      console.log("Hello!");
    },
  };
  ```
- **Array**
  ```javascript
  let colors = ["red", "green", "blue"];
  let numbers = [1, 2, 3, 4, 5];
  ```
- **Date**
  ```javascript
  let currentDate = new Date();
  ```
- **Map and Set**

  ```javascript
  let map = new Map();
  map.set("name", "John");

  let set = new Set();
  set.add(1);
  set.add(2);
  set.add(1); // Won't add because it's already in the set
  ```

## Javascript Type conversion:

- **Implicit type conversion**

```javascript
let result = "5" + 3; // '53' (string concatenation)

let isTrue = true + 1; // 2 (true is coerced to 1)

console.log(null + 1); // 1 (null is coerced to 0)
console.log(undefined + 1); // NaN (undefined is not a number)
```

- **Explicit Type Conversion**

```javascript
let num1 = 10;
let str = String(num1); // "10"

let strNum2 = "20";
let num2 = Number(strNum2); // 20

let truthy = Boolean(1); // true
let falsy = Boolean(0); // false

let intNum = parseInt("123.45"); // 123
let floatNum = parseFloat("123.45"); // 123.45
```

## Inline JavaScript Example:

```html
<div>
  <a href="" onclick="alert('Hello!! are you there!!')">Click Me</a>
</div>
```

## c++ block & scope

```c++
#include <iostream>
using namespace std;

int max = 9999999;

int main() {
    {
        int a = 20;
        {
            {
                cout<<b<<endl;
                {
                    cout<<a<<endl;
                    int b = 90;
                }
            }
        }
    }

  return 0;
}
```

Operators:

```javascript
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
```
