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
    //this.divId.addEventListener("mousemove", this.numChange);
    this.divId.addEventListener("touchmove", this.numChange);
  };

  numChange = (e) => {
    this.x = (e.clientX - this.xd) / 20;
    this.textDisplay.innerHTML = (this.x + this.output).toFixed(0);
  };

  initialize = () => {
    //this.divId.addEventListener("mousedown", this.startSlide);
    this.divId.addEventListener("touchstart", this.startSlide);

    /*document.addEventListener("mouseup", () => {
      this.output += this.x;
      this.divId.removeEventListener("mousemove", this.numChange);
    });*/
    document.addEventListener("touchend", () => {
      this.output += this.x;
      this.divId.removeEventListener("touchmove", this.numChange);
    });
  };
}
