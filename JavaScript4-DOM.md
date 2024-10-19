## What is Document Object Model (DOM)

The Document Object Model (DOM) is an application programming interface (API) for manipulating HTML documents.

The DOM represents an HTML document as a tree of nodes. The DOM provides functions that allow you to add, remove, and modify parts of the document effectively.

```js
<html>
  <head>
    <title>JavaScript DOM</title>
  </head>
  <body>
    <p>Hello DOM!</p>
  </body>
</html>
```

![Alt text](https://www.javascripttutorial.net/wp-content/uploads/2020/01/JavaScript-DOM.png)

## Node Type

| Constant                         | Value | Description                                                                  |
| -------------------------------- | ----- | ---------------------------------------------------------------------------- |
| Node.ELEMENT_NODE                | 1     | An Element node like `<p>` or `<div>`.                                       |
| Node.TEXT_NODE                   | 3     | The actual Text inside an Element or Attr.                                   |
| Node.CDATA_SECTION_NODE          | 4     | A CDATASection, such as `<![CDATA[ … ]]>`.                                   |
| Node.PROCESSING_INSTRUCTION_NODE | 7     | A ProcessingInstruction of an XML document, such as `<?xml-stylesheet … ?>`. |
| Node.COMMENT_NODE                | 8     | A Comment node, such as `<!-- … -->`.                                        |
| Node.DOCUMENT_NODE               | 9     | A Document node.                                                             |
| Node.DOCUMENT_TYPE_NODE          | 10    | A DocumentType node, such as `<!DOCTYPE html>`.                              |
| Node.DOCUMENT_FRAGMENT_NODE      | 11    | A DocumentFragment node.                                                     |

To get the type of node, you use the `nodeType` property:

```
node.nodeType
```

## Node Relations

![Alt text](https://www.javascripttutorial.net/wp-content/uploads/2020/01/JavaScript-DOM-Node-Relationships.png)

## Selecting elements:

- `getElementById()` – select an element by id.
  Selects an element by its id attribute. Only one element can have a specific id, so this method returns a single element.

  ```js
  <!-- HTML -->
  <p id="intro">Hello World</p>

  const element = document.getElementById("intro");
  console.log(element.textContent); // Output: Hello World
  ```

- `getElementsByName()` – select elements by name.
  Selects elements by their name attribute. Returns a NodeList (a collection of elements).

```js
<!-- HTML -->
<input type="text" name="username">
<input type="text" name="username">

const elements = document.getElementsByName("username");
console.log(elements.length); // Output: 2
```

- `getElementsByTagName()` – select elements by a tag name.
  Selects elements by their tag name. Returns a NodeList of all elements with the specified tag.

```js
<!-- HTML -->
<h1>Title 1</h1>
<h1>Title 2</h1>

<!-- JavaScript -->
const headings = document.getElementsByTagName("h1");
console.log(headings.length); // Output: 2
```

- `getElementsByClassName()` – select elements by one or more class
  Selects all elements that have one or more specific class names. Returns a NodeList of matching elements.

```js
<!-- HTML -->
<div class="box red"></div>
<div class="box red"></div>

<!-- JavaScript -->
const redBoxes = document.getElementsByClassName("red");
console.log(redBoxes.length); // Output: 2
```

- `querySelector() & querySelectorAll()` – select elements by CSS selectors.
  `querySelector()`: Selects the first element that matches a specified CSS selector.
  `querySelectorAll()`: Selects all elements that match a specified CSS selector. Returns a NodeList.

```js
<!-- HTML -->
<p class="para">Paragraph 1</p>
<p class="para">Paragraph 2</p>

<!-- JavaScript -->
const firstPara = document.querySelector(".para"); // First matching element
console.log(firstPara.textContent); // Output: Paragraph 1 const allParas =
document.querySelectorAll(".para"); // All matching elements
console.log(allParas.length); // Output: 2
```

## Note

`NodeList`: A collection of nodes (elements) that is returned by methods like `getElementsByTagName()`, `getElementsByClassName()`, etc. You can iterate over it, similar to arrays, but it's not a true array.
`querySelector()` vs. `getElementById()`: `querySelector()` is more flexible as it can use any CSS selector, while `getElementById()` is faster for direct id selection.

## EventListeners

A browser event listener is a mechanism in JavaScript (or other web languages) that allows you to detect and respond to events that occur in the browser, such as user interactions (clicks, mouse movements, key presses, form submissions, etc.)

For Example: Suppose you have a login button, and on clicking that button browser triggresr the login action.

```js
// html
<button id="btn">Login</button>;

const button = document.querySelector("#btn");

button.addEventListener("click", (e) => {
  alert("You have logged in.");
});
```

## InnerText

`innerText` is a property used to get or set the text inside an HTML element.

## InnerHTML

`InnerHTML` is a property used to get or set the HTML element inside an HTML element.

## createElement

`createElement` is a method used to create a new HTML element dynamically using JavaScript.

## appendChild

`appendChild` is used to add an element (that you created with createElement or retrieved from somewhere else) to another element on the page.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Example Combining innerText, createElement, appendChild</title>
  </head>
  <body>
    <p id="myParagraph">Old paragraph content</p>
    <div id="container"></div>

    <script>
      // Change existing paragraph text using innerText
      const paragraph = document.getElementById("myParagraph");
      paragraph.innerText = "This is the updated paragraph text!";

      // Create a new div element
      const newDiv = document.createElement("div");
      newDiv.innerText = "This is a new div added to the container!";

      // Append the new div to the container
      const container = document.getElementById("container");
      container.appendChild(newDiv);
    </script>
  </body>
</html>
```

## Questions: On every Click on a buttion called `add More` append `hello` to the defined `div container`;

```html
<div class="container"></div>
<button id="btn">Add More</button>
```

```js
function addMore() {
  const newdiv = document.createElement("div");
  newdiv.innerHTML = `<h1>Hello..</h1>`;

  const container = document.querySelector(".container");
  container.appendChild(newdiv);
  //   console.log(div);
}

const button = document.querySelector("#btn");

button.addEventListener("click", (e) => {
  addMore();
});
```

## HTML Node List Vs Array;

`querySelector()` : selects an element
`querySelectorAll()`: returns `NodeList`

### NodeList:

(in the form of array reprsenetation only and can't perform standard array operations) `[li,li, li, li, li, ...]`

- Follows 0-base indexing
- Get length by `.length`
- ForEach or For loop used for manipulation

## getAttribute & setAttribute & classList

- The `getAttribute` method is used to retrieve the value of a specified attribute from an HTML element.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>getAttribute Example</title>
  </head>
  <body>
    <img id="myImage" src="image.jpg" alt="Sample Image" />

    <script>
      // Get the image element
      const image = document.getElementById("myImage");

      // Get the value of the 'src' attribute
      const imageUrl = image.getAttribute("src");

      // Display the image URL in the console
      console.log(imageUrl); // Output: "image.jpg"
    </script>
  </body>
</html>
```

- `The setAttribute method` is used to set the value of an attribute for a specified HTML element. It can add a new attribute or change the value of an existing one.

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>setAttribute Example</title>
</head>
<body>
  <img id="myImage" src="image.jpg" alt="Sample Image">

  <script>
    // Get the image element
    const image = document.getElementById('myImage');

    // Change the value of the 'src' attribute
    image.setAttribute('src', 'newImage.jpg');
  </script>
</body>
</html>

```

- `classList` is a property that provides methods to work with an element's class attribute. You can use it to add, remove, toggle, or check for specific classes.

```
Common classList methods:
classList.add('className') – Adds a class.
classList.remove('className') – Removes a class.
classList.toggle('className') – Adds the class if it's not present, removes it if it is.
classList.contains('className') – Checks if the element has the specified class.
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>classList Example</title>
    <style>
      .highlight {
        background-color: yellow;
      }
    </style>
  </head>
  <body>
    <button id="myButton">Click Me</button>

    <script>
      // Get the button element
      const button = document.getElementById("myButton");

      // Add a click event listener to the button
      button.addEventListener("click", function () {
        // Toggle the 'highlight' class on button click
        button.classList.toggle("highlight");
      });
    </script>
  </body>
</html>
```
