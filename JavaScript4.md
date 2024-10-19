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

- getElementById() – select an element by id.
  Selects an element by its id attribute. Only one element can have a specific id, so this method returns a single element.
  ```js
  <!-- HTML -->
  <p id="intro">Hello World</p>
  ```

<!-- JavaScript -->

const element = document.getElementById("intro");
console.log(element.textContent); // Output: Hello World

````

- getElementsByName() – select elements by name.
Selects elements by their name attribute. Returns a NodeList (a collection of elements).

```html
<!-- HTML -->
<input type="text" name="username">
<input type="text" name="username">

<!-- JavaScript -->
const elements = document.getElementsByName("username");
console.log(elements.length); // Output: 2

````

- getElementsByTagName() – select elements by a tag name.
  Selects elements by their tag name. Returns a NodeList of all elements with the specified tag.

```html
<!-- HTML -->
<h1>Title 1</h1>
<h1>Title 2</h1>

<!-- JavaScript -->
const headings = document.getElementsByTagName("h1");
console.log(headings.length); // Output: 2
```

- getElementsByClassName() – select elements by one or more class
  Selects all elements that have one or more specific class names. Returns a NodeList of matching elements.

```html
<!-- HTML -->
<div class="box red"></div>
<div class="box red"></div>

<!-- JavaScript -->
const redBoxes = document.getElementsByClassName("red");
console.log(redBoxes.length); // Output: 2
```

- querySelector() & querySelectorAll() – select elements by CSS selectors.
  `querySelector()`: Selects the first element that matches a specified CSS selector.
  `querySelectorAll()`: Selects all elements that match a specified CSS selector. Returns a NodeList.

```html
<!-- HTML -->
<p class="para">Paragraph 1</p>
<p class="para">Paragraph 2</p>

<!-- JavaScript -->
const firstPara = document.querySelector(".para"); // First matching element
console.log(firstPara.textContent); // Output: Paragraph 1 const allParas =
document.querySelectorAll(".para"); // All matching elements
console.log(allParas.length); // Output: 2
```
