class Sketch {
  constructor() {
    this.etchContainer = document.querySelector(".etch-container");
    this.gridSizeInput = document.querySelector("#grid-size");
    this.gridSizeDisplay = document.querySelector("#grid-size-display");
    this.customColor = document.querySelector("#custom-color");
    this.colorModeButton = document.querySelector("#color-mode");
    this.randomModeButton = document.querySelector("#random-mode");
    this.clearModeButton = document.querySelector("#clear");
    this.eraserModeButton = document.querySelector("#eraser");
    this.currentColor = "#000000";
    this.currentMode = "color";
    this.addEventListeners();
  }

  addEventListeners() {
    window.addEventListener("load", this.loadWindow.bind(this));
    this.gridSizeInput.addEventListener(
      "input",
      this.gridSizeHandler.bind(this)
    );
    this.customColor.addEventListener(
      "input",
      this.customColorHandler.bind(this)
    );
    this.colorModeButton.addEventListener(
      "click",
      this.colorModeButtonHandler.bind(this)
    );
    this.randomModeButton.addEventListener(
      "click",
      this.randomModeButtonHandler.bind(this)
    );
    this.eraserModeButton.addEventListener(
      "click",
      this.eraserModeButtonHandler.bind(this)
    );
    this.clearModeButton.addEventListener(
      "click",
      this.clearModeButtonHandler.bind(this)
    );
  }
  loadWindow() {
    this.colorModeButton.style.backgroundColor = "rgb(112, 175, 238)";
    this.createGrid(16);
  }
  createGrid(size) {
    this.etchContainer.innerHTML = "";

    this.etchContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    this.etchContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    const totalSquares = size * size;

    for (let i = 0; i < totalSquares; i++) {
      const square = document.createElement("div");
      square.classList.add("grid-square");

      square.addEventListener("mouseenter", (event) => {
        if (this.currentMode === "color") {
          event.target.style.backgroundColor = this.currentColor;
        } else if (this.currentMode === "random") {
          event.target.style.backgroundColor = `#${Math.floor(
            Math.random() * 16777215
          ).toString(16)}`;
        } else if (this.currentMode === "eraser") {
          event.target.style.backgroundColor = "#ffffff";
        }
      });
      this.etchContainer.appendChild(square);
    }
  }
  gridSizeHandler() {
    const size = this.gridSizeInput.value;
    this.createGrid(size);
    this.gridSizeDisplay.textContent = `${size} x ${size}`;
  }
  customColorHandler(e) {
    this.currentColor = e.target.value;
  }
  colorModeButtonHandler() {
    this.currentMode = "color";
    this.colorModeButton.style.backgroundColor = "rgb(112, 175, 238)";
    this.eraserModeButton.style.backgroundColor = "#fff";
    this.randomModeButton.style.backgroundColor = "#fff";
    this.clearModeButton.style.backgroundColor = "#fff";
  }
  randomModeButtonHandler() {
    this.currentMode = "random";
    this.randomModeButton.style.backgroundColor = "rgb(112, 175, 238)";
    this.colorModeButton.style.backgroundColor = "#fff";
    this.eraserModeButton.style.backgroundColor = "#fff";
    this.clearModeButton.style.backgroundColor = "#fff";
  }

  eraserModeButtonHandler() {
    this.currentMode = "eraser";
    this.eraserModeButton.style.backgroundColor = "rgb(112, 175, 238)";
    this.randomModeButton.style.backgroundColor = "#fff";
    this.colorModeButton.style.backgroundColor = "#fff";
    this.clearModeButton.style.backgroundColor = "#fff";
  }
  clearModeButtonHandler() {
    const allSquares = document.querySelectorAll(".grid-square");
    allSquares.forEach(function (square) {
      square.style.backgroundColor = "";
    });
    this.randomModeButton.style.backgroundColor = "#fff";
    this.colorModeButton.style.backgroundColor = "rgb(112, 175, 238)";
    this.eraserModeButton.style.backgroundColor = "#fff";
    this.currentMode = "color";
  }
}

const etch = new Sketch();
