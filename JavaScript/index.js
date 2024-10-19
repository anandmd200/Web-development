const allbox = document.querySelectorAll(".box");

console.log(allbox);

allbox.forEach((box) => {
  box.addEventListener("dblclick", function () {
    let colorAttribute = box.getAttribute("data-color");
    box.classList.toggle(colorAttribute);
  });
});
