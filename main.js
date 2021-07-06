const coffeeSlider = new Slider("coffee-slider", "coffee", 20, "");
const ratioSlider = new Slider("ratio-slider", "ratio", 40, "1:");
const waterSlider = new Slider("water-slider", "ratio", 20, "");
coffeeSlider.initialize();
ratioSlider.initialize();
waterSlider.initialize();

document.getElementById("startStop").addEventListener("touchstart", start);
document.getElementById("reset").addEventListener("touchstart", reset);

document.getElementById("timer").innerHTML = 0.0;
