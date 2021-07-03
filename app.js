const timer = document.getElementById("timer");
let interval;
let pause = false;
let userTime = 3;
let time = userTime

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
  if (time < 0) {
    reset('DONE')
    setTimeout(() => {timer.innerHTML = userTime}, 2000)
    return
  }
  timer.innerHTML = time.toFixed(1);
  time -= 0.1;
};
const reset = (display) => {
  clearInterval(interval);
  interval = null;
  pause = false;
  time = userTime;
  timer.innerHTML = display
};

timer.innerHTML = time;
document.getElementById("startStop").addEventListener("click", start);
document.getElementById("reset").addEventListener("click", () => {reset(userTime)});
