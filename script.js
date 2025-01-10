const etchContainer = document.querySelector(".etch-container");
const gridSizeInput = document.querySelector("#grid-size");
const gridSizeDisplay = document.querySelector("#grid-size-display");

const createGrid = function (size) {
  etchContainer.innerHTML = "";

  etchContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  etchContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  const totalSquares = size * size;

  for (i = 0; i < totalSquares; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");
    etchContainer.appendChild(square);
  }
};

createGrid(16);

gridSizeInput.addEventListener("input", function () {
  const size = gridSizeInput.value;
  createGrid(size);
  gridSizeDisplay.textContent = `${size} x ${size}`;
});
