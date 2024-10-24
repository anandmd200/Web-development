## Mouse Event
The MouseEvent Object handles events that occur when the mouse interacts with the HTML document.
```html
<!DOCTYPE html>
<html>
<body>
<h1>HTML DOM Events</h1>
<h2>The onmouseenter Event</h2>

<p>Use the addEventListener() method to attach a "mouseenter" and "mouseleave" event to a h1 element.</p>

<h1 id="demo">Mouse over me</h1>

<script>
document.getElementById("demo").addEventListener("mouseenter", mouseEnter);
document.getElementById("demo").addEventListener("mouseleave", mouseLeave);

function mouseEnter() {
  document.getElementById("demo").style.color = "red";
}

function mouseLeave() {
  document.getElementById("demo").style.color = "black";
}
</script>

</body>
</html>
```


## Sibling Nodes: 
- nextElementSibling   => returns next html element with respect to trget Element
- previousElementSibling => returns previous html element with respect to trget Element
- nextSibling => return next node with respect to trget Element (e.g '\n' as text node)
- previousSibling => return previous node with respect to trget Element

```html
 <ul id="list" class="mylist">
      <li>A</li>
      <li>B</li>
      <li>C</li>
      <li id="target">E</li>
      <li>D</li>
      <li>E</li>
    </ul>
```
```js
const targetNode = document.getElementById("target");

console.log(target.previousElementSibling);
// console.log(target.nextSibling);

deleteSiblings(targetNode);


function deleteSiblings(targetNode){

    let before = targetNode.previousElementSibling;
    let after = targetNode.nextElementSibling;

    while(before){
        before.remove();
        before = targetNode.previousElementSibling;
    }

    while(after){
        after.remove();
        after = targetNode.nextElementSibling;
    }
}
```