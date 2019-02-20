var firstColor = document.getElementById("Color1");
var secondColor = document.getElementById("Color2");
var randomize = document.getElementById("Randomize");
var style = document.getElementById("BackgroundStyle");
var body = document.getElementsByTagName("body")[0];

function changeColor(){
  body.style.background = "linear-gradient(to right, " + firstColor.value + ", " + secondColor.value + ")";

  style.innerHTML = "background: linear-gradient(to right, " + firstColor.value + ", " + secondColor.value + ");";
}

function randomHexColor(){
  return "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
}

function randomBackgroud(){
  firstColor.value = randomHexColor();
  secondColor.value = randomHexColor();

  changeColor()
}

changeColor()

firstColor.addEventListener("input", changeColor);
secondColor.addEventListener("input", changeColor);
randomize.addEventListener("click", randomBackgroud);
