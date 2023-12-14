var color1 = document.getElementsByName("c1")[0];
var color2 = document.getElementsByName("c2")[0];
var body = document.getElementById("gradient");
var slider = document.getElementById("myRange");

var css = document.querySelector("h3");

function updateColor() {
  console.log("Test");
  body.style.background =
    "linear-gradient(" +
    slider.value +
    "deg," +
    color1.value +
    ", " +
    color2.value +
    ")";
  css.textContent = body.style.background + ";";
}

updateColor();
color1.addEventListener("input", updateColor);
color2.addEventListener("input", updateColor);
slider.addEventListener("input", updateColor);
