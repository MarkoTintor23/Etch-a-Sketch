const etchContainer = document.querySelector(".etch-container");
const gridSizeInput = document.querySelector("#grid-size");
const gridSizeDisplay = document.querySelector("#grid-size-display");
const customColor = document.querySelector("#custom-color");
const colorModeButton = document.querySelector("#color-mode");
const randomModeButton = document.querySelector("#random-mode");
const clearModeButton = document.querySelector("#clear");
const eraserModeButton = document.querySelector("#eraser");

let currentColor = "#000000";
let currentMode = "color";
window.addEventListener("load", function () {
  colorModeButton.style.backgroundColor = "rgb(112, 175, 238)";
  createGrid(16);
});
const createGrid = function (size) {
  etchContainer.innerHTML = "";

  etchContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  etchContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  const totalSquares = size * size;

  for (i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");

    square.addEventListener("mouseenter", function () {
      if (currentMode === "color") {
        square.style.backgroundColor = currentColor;
      } else if (currentMode === "random") {
        square.style.backgroundColor = `#${Math.floor(
          Math.random() * 16777215
        ).toString(16)}`;
      } else if (currentMode === "eraser") {
        square.style.backgroundColor = "#ffffff";
      } else if (currentMode === "clear") {
        square.style.backgroundColor = "#fff";
      }
    });
    etchContainer.appendChild(square);
  }
};

gridSizeInput.addEventListener("input", function () {
  const size = gridSizeInput.value;
  createGrid(size);
  gridSizeDisplay.textContent = `${size} x ${size}`;
});

customColor.addEventListener("input", function (e) {
  currentColor = e.target.value;
});

colorModeButton.addEventListener("click", function () {
  currentMode = "color";
  colorModeButton.style.backgroundColor = "rgb(112, 175, 238)";
  eraserModeButton.style.backgroundColor = "#fff";
  randomModeButton.style.backgroundColor = "#fff";
  clearModeButton.style.backgroundColor = "#fff";
});
randomModeButton.addEventListener("click", function () {
  currentMode = "random";
  randomModeButton.style.backgroundColor = "rgb(112, 175, 238)";
  colorModeButton.style.backgroundColor = "#fff";
  eraserModeButton.style.backgroundColor = "#fff";
  clearModeButton.style.backgroundColor = "#fff";
});
eraserModeButton.addEventListener("click", function () {
  currentMode = "eraser";
  eraserModeButton.style.backgroundColor = "rgb(112, 175, 238)";
  randomModeButton.style.backgroundColor = "#fff";
  colorModeButton.style.backgroundColor = "#fff";
  clearModeButton.style.backgroundColor = "#fff";
});
clearModeButton.addEventListener("click", function () {
  const allSquares = document.querySelectorAll(".grid-square");
  allSquares.forEach(function (square) {
    square.style.backgroundColor = "";
  });
  randomModeButton.style.backgroundColor = "#fff";
  colorModeButton.style.backgroundColor = "rgb(112, 175, 238)";
  eraserModeButton.style.backgroundColor = "#fff";
  currentMode = "color";
});
