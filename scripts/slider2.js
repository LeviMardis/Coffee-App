const startSlide = (e, div, type) => {
  // Save screen touch x coordinates and begin listening for touch move
  touch = true;
  xd = e.touches[0].clientX;
  if (type === "slider") {
    div.addEventListener("touchmove", (e) => {
      numChange(e, xd);
    });
  } else {
    //div2.addEventListener("touchmove", ratioChange)
  }
};

const numChange = (e, xd) => {
  // Set the incrememnt speed based on movement
  change = (e.touches[0].clientX - xd) / 20;
  let output = Math.floor((change + coffee) * -1);
  // If 0 or negative hide pre text and keep current display set to 0
  if (output <= 0) {
    preText.innerHTML = null;
    postText.innerHTML = 1;
    textDisplay.innerHTML = 0;
    coffee = 0;
  } else {
    // Display pre/post/current numbers
    preText.innerHTML = output - 1;
    postText.innerHTML = output + 1;
    textDisplay.innerHTML = output;
  }
};

const save = (result, end, div) => {
  if (touch) {
    touch = false;
    return (result += end);
  }
  div.removeEventListener("touchmove", numChange);
};
