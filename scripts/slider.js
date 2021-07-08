const startSlide = (e, div, type) => {
  // Save screen touch x coordinates and begin listening for touch move
  let xd = e.touches[0].clientX;
  if (type === "coffee") {
    coffeeTouch = true;
    div.addEventListener("touchmove", (e) => {
      numChange(e, xd);
    });
  } else if (type === "ratio") {
    ratioTouch = true;
    div.addEventListener("touchmove", (e) => {
      ratioChange(e, xd);
    });
  }
};

const numChange = (e, xd) => {
  // Set the incrememnt speed based on movement / add current number
  change = (e.touches[0].clientX - xd) / 20;
  let output = Math.floor((change + coffee) * -1);
  let roundRatio = Math.ceil(ratio - 1) * -1;
  // If 0 or negative hide pre text and keep current display set to 1
  if (output <= 0) {
    document.getElementById("pre-coffee").innerHTML = null;
    document.getElementById("post-coffee").innerHTML = 2;
    document.getElementById("coffee").innerHTML = 1;
    document.getElementById("pre-water").innerHTML = null;
    document.getElementById("post-water").innerHTML = roundRatio * 2;
    document.getElementById("water").innerHTML = roundRatio;
  } else {
    // Display pre/post/current numbers
    document.getElementById("pre-coffee").innerHTML = output;
    document.getElementById("post-coffee").innerHTML = output + 2;
    document.getElementById("coffee").innerHTML = output + 1;
    document.getElementById("pre-water").innerHTML = roundRatio * (output);
    document.getElementById("post-water").innerHTML = (output + 2) * roundRatio;
    document.getElementById("water").innerHTML = (output + 1) * roundRatio;
  }
};

const ratioChange = (e, xd) => {
  // Set the incrememnt speed based on movement
  change = (e.touches[0].clientX - xd) / 60;
  let output = Math.floor((change + ratio) * -1);
  let roundCoffee = Math.ceil(coffee - 1) * -1;
  // If 0 or negative hide pre text and keep current display set to 1
  if (output <= 0) {
    document.getElementById("pre-ratio").innerHTML = null;
    document.getElementById("post-ratio").innerHTML = "1:2";
    document.getElementById("ratio").innerHTML = "1:1";
    document.getElementById("pre-water").innerHTML = (roundCoffee - 1) === 0 ? null : roundCoffee - 1;
    document.getElementById("post-water").innerHTML = roundCoffee + 1;
    document.getElementById("water").innerHTML = roundCoffee;
  } else {
    // Display pre/post/current numbers
    document.getElementById("pre-ratio").innerHTML = "1:" + (output);
    document.getElementById("post-ratio").innerHTML = "1:" + (output + 2);
    document.getElementById("ratio").innerHTML = "1:" + (output + 1);
    document.getElementById("pre-water").innerHTML = (roundCoffee - 1) === 0 ? null : (roundCoffee - 1) * (output + 1);
    document.getElementById("post-water").innerHTML = (roundCoffee + 1)  * (output + 1);
    document.getElementById("water").innerHTML = roundCoffee * (output + 1);
  }
};

const coffeeSave = () => {
  coffee += change;
  if (coffee > 0) {
    coffee = 0;
  }
  change = 0;
  coffeeTouch = false;
  document.removeEventListener("touchmove", numChange);
};
const ratioSave = () => {
  ratio += change;
  if (ratio > 0) {
    ratio = 0;
  }
  change = 0;
  ratioTouch = false;
  document.removeEventListener("touchmove", ratioChange);
};