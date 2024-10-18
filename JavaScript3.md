## Functions

A function in JavaScript is a group of reusable code that can be called anywhere in your program. It eliminates the need of writing the same code again and again.

## Function declarations

A function definition (also called a function declaration, or function statement) consists of the function keyword, followed by:

- The name of the function.
- A list of parameters to the function, enclosed in parentheses and separated by commas.
- The JavaScript statements that define the function, enclosed in curly braces, { /_ … _/ }.

```js
function square(number) {
  return number * number;
}
```

Parameters are essentially passed to functions by value — so if the code within the body of a function assigns a completely new value to a parameter that was passed to the function, the change is not reflected globally or in the code which called that function.

When you pass an object as a parameter, if the function changes the object's properties, that change is visible outside the function, as shown in the following example:

```js
function myFunc(theObject) {
  theObject.make = "Toyota";
}

const mycar = {
  make: "Honda",
  model: "Accord",
  year: 1998,
};

console.log(mycar.make); // "Honda"
myFunc(mycar);
console.log(mycar.make); // "Toyota"

// similarly with array

function myFunc(theArr) {
  theArr[0] = 30;
}

const arr = [45];

console.log(arr[0]); // 45
myFunc(arr);
console.log(arr[0]); // 30
```

## Function expressions

While the function declaration above is syntactically a statement, functions can also be created by a function expression.

Such a function can be anonymous; it does not have to have a name. For example, the function square could have been defined as:

```js
const square = function (number) {
  return number * number;
};

console.log(square(4)); // 16
```

However, a name can be provided with a function expression. Providing a name allows the function to refer to itself,

```js
const factorial = function xyz(n) {
  console.log("This is also called named expresiion");
};

console.log(factorial(3)); // 6
```

## what is difference b/w function Declaration (or function statement) vs function expression

### Function hoisting: Function hoisting only works with function declarations — not with function expressions.

```js
/* function declaration

This code runs without any error, despite the square() function being called before it's declared. This is because the JavaScript interpreter hoists the entire function declaration to the top of the current scope.*/

console.log(square(5)); // 25

function square(n) {
  return n * n;
}

//function expression

console.log(square(5)); // ReferenceError: Cannot access 'square' before initialization
const square = function (n) {
  return n * n;
};
```

## Function scope

Variables defined inside a function cannot be accessed from anywhere outside the function, because the variable is defined only in the scope of the function. However, a function can access all variables and functions defined inside the scope in which it is defined.

In other words, a function defined in the global scope can access all variables defined in the global scope. A function defined inside another function can also access all variables defined in its parent function, and any other variables to which the parent function has access.

```js
// The following variables are defined in the global scope
const num1 = 20;
const num2 = 3;
const name = "Chamakh";

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

console.log(multiply()); // 60

// A nested function example
function getScore() {
  const num1 = 2;
  const num2 = 3;

  function add() {
    return `${name} scored ${num1 + num2}`;
  }

  return add();
}

console.log(getScore()); // "Chamakh scored 5"
```

## Function Parameter & agrumnents;

```js
function calculateAvg(param1, param2) {
  //here param1, param2 are function parameter
  return (param1 + param2) / 2;
}

calculateAvg(20, 30); // here 20, 30 are called function args
```

### Rest Parameter

```js
function multiply(multiplier, ...theArgs) {
  return theArgs.map((x) => multiplier * x);
}

const arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
```

## Aerrow function

The arrow functions in JavaScript allow us to create a shorter and anonymous function. Arrow functions are written without "function" keyword. The JavaScript arrow functions are introduced in ES6.

```js
const add = (x, y) => x + y;

const add = (x, y) => {
  return x + y;
};

// Example with map
const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

const a2 = a.map(function (s) {
  return s.length;
});

console.log(a2); // [8, 6, 7, 9]

const a3 = a.map((s) => s.length);

console.log(a3); // [8, 6, 7, 9]
```

## First class function

A programming language is said to have First-class functions when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.

```js
function sayHello() {
  return "Hello, ";
}
function greeting(helloMessage, name) {
  console.log(helloMessage() + name);
}
// Pass `sayHello` as an argument to `greeting` function
greeting(sayHello, "JavaScript!");

// return a function from as a variable
function sayHello() {
  return () => {
    console.log("Hello!");
  };
}
```

## Closures

A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives a function access to its outer scope. In JavaScript, closures are created every time a function is created, at function creation time.

The inner function full access to all the variables and functions defined inside the outer function (and all other variables and functions that the outer function are accessable by inner function).

However, the outer function does not have access to the variables and functions defined inside the inner function. This provides a sort of encapsulation for the variables of the inner function.

```js
function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();
```

## Call back functions

JavaScript is designed to handle asynchronous programming which allows us to perform multiple tasks at once without blocking the main execution thread.

A callback is a function that is passed as an argument to another function and is executed after the completion of that main function. In simple terms, a callback function is called at the end of a task to either deliver results or perform an action.

```js
function greet(name) {
  console.log("Hello, " + name);
}

function processUserInput(callback) {
  const name = "John";
  callback(name); // Executing the callback
}

processUserInput(greet);

//example 2:

function mainFunction(callback) {
  console.log("Performing operation...");
  // Use setTimeout to simulate an asynchronous operation
  setTimeout(function () {
    callback("Operation complete");
  }, 1000);
}

// Define the callback function
function callbackFunction(result) {
  console.log("Result: " + result);
}

// Call the main function with the callback function
mainFunction(callbackFunction);
```

```html
<!-- callback EventListener -->
<html>
  <head>
    <title>Java script</title>
  </head>
  <body>
    <button id="btn">click me</button>
    <script>
      let count = 0;
      document.getElementById("btn").addEventListener("click", function xyx() {
        count++;
        console.log("clicked: ", count);
      });
    </script>
  </body>
</html>
```
