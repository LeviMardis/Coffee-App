const coffeeSlider = new Slider("coffee-slider", "coffee");
coffeeSlider.initialize();

document.getElementById("startStop").addEventListener("touchstart", start);
document.getElementById("reset").addEventListener("touchstart", reset);

document.getElementById("timer").innerHTML = 0.0;
