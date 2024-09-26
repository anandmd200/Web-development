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

# JavaScript Placement in HTML Sections

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
