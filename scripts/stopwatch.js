const timer = document.getElementById("timer");
const button = document.getElementById("reset");
let interval;
let pause = false;
let ms = 0
let seconds = 0
let minutes = 0

const start = () => {
  if (!pause) {
    interval = setInterval(update, 100);
    pause = true;
    button.disabled = true;
  } else {
    clearInterval(interval);
    interval = null;
    pause = false;
    button.disabled = false;
  }
};
const update = () => {
  ms ++;
  if (ms >= 10) {
    seconds++
    ms = 0
  }
  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }
  timer.innerHTML =
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds.toFixed(0) : seconds.toFixed(0));
};
const reset = () => {
  if (pause) {
    return;
  }
  clearInterval(interval);
  interval = null;
  pause = false;
  button.disabled = true;
  seconds = 0;
  minutes = 0;
  timer.innerHTML = "00:00";
};
