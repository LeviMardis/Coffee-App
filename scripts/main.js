const sliderDiv = document.getElementById("coffee-slider");
const ratioDiv = document.getElementById("ratio-slider");
const preText = document.getElementById("pre-coffee");
const postText = document.getElementById("post-coffee");
const textDisplay = document.getElementById("coffee");
let coffee = null;
let ratio = 1
let change = 0
let touch = false;

sliderDiv.addEventListener("touchstart", (e) => {
  startSlide(e, sliderDiv, 'slider');
});

document.addEventListener("touchend", () => {
  coffee = save(coffee, change, sliderDiv);
});

document.getElementById("startStop").addEventListener("touchstart", start);
document.getElementById("reset").addEventListener("touchstart", reset);

document.getElementById("timer").innerHTML = 0.0;
