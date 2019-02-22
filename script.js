let firstColor = document.getElementById("Color1");
let secondColor = document.getElementById("Color2");
let randomize = document.getElementById("Randomize");
let style = document.getElementById("BackgroundStyle");
const body = document.getElementsByTagName("body")[0];

const changeColor = () => {
  body.style.background = "linear-gradient(to right, " + firstColor.value + ", " + secondColor.value + ")";

  style.innerHTML = "background: linear-gradient(to right, " + firstColor.value + ", " + secondColor.value + ");";
};

const randomHexColor = () => "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});

const randomBackgroud = () => {
  firstColor.value = randomHexColor();
  secondColor.value = randomHexColor();

  changeColor()
};

changeColor()

firstColor.addEventListener("input", changeColor);
secondColor.addEventListener("input", changeColor);
randomize.addEventListener("click", randomBackgroud);
