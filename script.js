var firstColor = document.getElementById("Color1");
var secondColor = document.getElementById("Color2");
var style = document.getElementById("BackgroundStyle");
var body = document.getElementsByTagName("body")[0];

function changeColor(target){
  body.style.background = "linear-gradient(to right," + firstColor.value + ", " + secondColor.value + ")";
}

firstColor.addEventListener("input", changeColor);
secondColor.addEventListener("input", changeColor);
