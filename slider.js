class Slider {
  constructor(container, display, speed, format, base) {
    this.divId = document.getElementById(container);
    this.preText = document.getElementById("pre-" + display);
    this.postText = document.getElementById("post-" + display);
    this.textDisplay = document.getElementById(display);
    this.xd = null;
    this.x = 0;
    this.output = 0;
    this.speed = speed;
    this.format = format;
    this.base = base;
  }

  startSlide = (e) => {
    // Save screen touch x coordinates and begin listening for touch move
    this.xd = e.touches[0].clientX;
    this.divId.addEventListener("touchmove", this.numChange);
  };

  numChange = (e) => {
    // Set the incrememnt speed based on movement
    this.x = (e.touches[0].clientX - this.xd) / this.speed;
    let textOut = (this.x + this.output) * -1;
    // If 0 or negative hide pre text and keep current display set to 0
    if (Math.floor(textOut) <= 0) {
      this.preText.innerHTML = `${this.format}${this.base}`
      this.postText.innerHTML = `${ this.format } ${ this.base + 1 }`;
      this.textDisplay.innerHTML = `0`;
      this.output = 0;
    } else {
    // Display pre/post/current numbers
      this.preText.innerHTML = `${this.format}${Math.floor(textOut - 1)}`;
      this.postText.innerHTML = `${this.format}${Math.floor(textOut + 1)}`;
      this.textDisplay.innerHTML = `${this.format}${Math.floor(textOut)}`;
    }
  };

  initialize = () => {
    // Begin listening for touch start and end events
    this.divId.addEventListener("touchstart", this.startSlide);
    document.addEventListener("touchend", () => {
      // If there has been a corrext touch in this element log the touch end results, else do nothing
      if (this.xd !== null) {
        this.output += this.x;
        this.xd = null;
      }
      this.divId.removeEventListener("touchmove", this.numChange);
    });
  };
  get out() {
    return this.output
  }
  set out(x) {
    this.output 
  }
}
