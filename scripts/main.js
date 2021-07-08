const coffeeDiv = document.getElementById("coffee-slider");
const waterDiv = document.getElementById("water-slider")
const ratioDiv = document.getElementById("ratio-slider");
const preText = document.getElementById("pre-coffee");
const postText = document.getElementById("post-coffee");
const textDisplay = document.getElementById("coffee");
let coffee = 0;
let ratio = -15;
let water = 0
let change = 0;
let coffeeTouch = false;
let ratioTouch = false;

coffeeDiv.addEventListener("touchstart", (e) => {
  startSlide(e, coffeeDiv, "coffee");
});

ratioDiv.addEventListener("touchstart", (e) => {
  startSlide(e, ratioDiv, "ratio");
});

waterDiv.addEventListener("touchstart", (e) => {
    startSlide(e, waterDiv, 'coffee')
})

document.addEventListener('touchend', () => {
  if (coffeeTouch) {
    coffeeSave();
  } else if (ratioTouch) {
    ratioSave()
  }
});

document.getElementById("startStop").addEventListener("change", start);
document.getElementById("reset").addEventListener("touchstart", reset);
