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
