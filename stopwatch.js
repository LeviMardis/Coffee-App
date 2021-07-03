const timer = document.getElementById("timer");
const button = document.getElementById("reset")
let interval;
let pause = false;
let time = 0

const start = () => {
  if (!pause) {
    interval = setInterval(update, 100);
    pause = true;
    button.disabled = true
  } else {
    clearInterval(interval);
    interval = null;
    pause = false;
    button.disabled = false
  }
};
const update = () => {
  timer.innerHTML = time.toFixed(1);
  time += 0.1;
};
const reset = () => {
  if (pause) {
    return
  }
  clearInterval(interval);
  interval = null;
  pause = false;
  button.disabled = true
  time = 0
  timer.innerHTML = time
};
