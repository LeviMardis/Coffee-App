class Slider {
  constructor(container, display) {
    this.divId = document.getElementById(container);
    this.textDisplay = document.getElementById(display);
    this.xd = null;
    this.x = 0;
    this.output = 0;
  }

  startSlide = (e) => {
    this.xd = e.clientX;
    this.divId.addEventListener("mousemove", this.numChange);
  };

  numChange = (e) => {
    this.x = (e.clientX - this.xd) / 20;
    this.textDisplay.innerHTML = Math.floor(this.x + this.output);
  };

  initialize = () => {
    this.divId.addEventListener("mousedown", this.startSlide);

    document.addEventListener("mouseup", () => {
      this.output += this.x;
      this.divId.removeEventListener("mousemove", this.numChange);
    });
  };
}
