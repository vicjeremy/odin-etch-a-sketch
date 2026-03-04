const container = document.createElement("div");
container.setAttribute("id", "grid-container");
container.classList.add("container");
document.body.appendChild(container);
const gridSize = 16;
const totalSquares = gridSize * gridSize;

function createGrid(size, total) {
  for (let i = 0; i < total; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `calc(100% / ${size})`;
    square.style.height = `calc(100% / ${size})`;
    square.addEventListener("mouseenter", () => {
      square.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
      let currentBrightness = square.dataset.brightness || 100;
      currentBrightness = parseInt(currentBrightness) - 10;

      if (currentBrightness >= 0) {
        square.style.filter = `brightness(${currentBrightness}%)`;
        square.dataset.brightness = currentBrightness;
      }
    });
    container.appendChild(square);
  }
}
createGrid(gridSize, totalSquares);

const btn = document.createElement("button");
btn.classList.add("button");
btn.textContent = "Change Square";
document.body.prepend(btn);
btn.addEventListener("click", function (e) {
  let numGrid = parseInt(prompt("Please enter number of squares per side: "));
  if (isNaN(numGrid)) numGrid = 0;
  let grid = Math.min(100, numGrid);
  console.log(grid);

  container.textContent = "";
  createGrid(grid, grid * grid);
});
