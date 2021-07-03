const timer = document.getElementById("timer");
let interval;
let pause = false;
let time = 0

const start = () => {
  if (!pause) {
    interval = setInterval(update, 100);
    pause = true;
  } else {
    clearInterval(interval);
    interval = null;
    pause = false;
  }
};
const update = () => {
  timer.innerHTML = time.toFixed(1);
  time += 0.1;
};
const reset = () => {
  clearInterval(interval);
  interval = null;
  pause = false;
  time = 0
  timer.innerHTML = time
};

timer.innerHTML = time;
document.getElementById("startStop").addEventListener("click", start);
document.getElementById("reset").addEventListener("click", reset);
