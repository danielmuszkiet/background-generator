var color1 = document.getElementsByName("c1")[0];
var color2 = document.getElementsByName("c2")[0];
var color3 = document.getElementsByName("c3")[0];
var body = document.getElementById("gradient");
var slider = document.getElementById("myRange");
var selection = document.getElementById("cl");

var css = document.querySelector("h3");

function updateColor() {
  if (selection.value === "2") {
    body.style.background =
      "linear-gradient(" +
      slider.value +
      "deg," +
      color1.value +
      ", " +
      color2.value +
      ")";
  } else {
    body.style.background =
      "linear-gradient(" +
      slider.value +
      "deg," +
      color1.value +
      ", " +
      color2.value +
      ", " +
      color3.value +
      ")";
  }

  css.textContent = body.style.background + ";";
}

function changeColorPickers() {
  if (selection.value === "2") {
    color3.hidden = true;
  } else {
    color3.hidden = false;
  }
  updateColor();
}
updateColor();
changeColorPickers();
color1.addEventListener("input", updateColor);
color2.addEventListener("input", updateColor);
color3.addEventListener("input", updateColor);
slider.addEventListener("input", updateColor);
selection.addEventListener("change", changeColorPickers);
