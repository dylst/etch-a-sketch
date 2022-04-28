const gridContainer = document.querySelector(".grid-container");
const reset = document.querySelector(".btn-reset");
const input = document.getElementById("grid-size");
const submit = document.getElementById("grid-submit");

const createGrid = function () {
  gridContainer.style["grid-template-rows"] = `repeat(16, 2fr)`;
  gridContainer.style["grid-template-columns"] = `repeat(16, 2fr)`;
  for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    gridContainer.appendChild(square);
  }
};
createGrid();

const updateGrid = function () {
  const size = Number(input.value) || 16;
  input.value = "";
  input.setAttribute("placeholder", `${size}`);
  gridContainer.innerHTML = "";
  gridContainer.style["grid-template-rows"] = `repeat(${size}, 2fr)`;
  gridContainer.style["grid-template-columns"] = `repeat(${size}, 2fr)`;
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    gridContainer.appendChild(square);
  }
};

submit.addEventListener("click", function () {
  updateGrid();
});

gridContainer.addEventListener("mouseover", function (e) {
  if (e.target.classList.contains("square")) {
    e.target.classList.remove("square");
    e.target.classList.add("fill");
  }
});

reset.addEventListener("click", function () {
  gridContainer.innerHTML = "";
  createGrid();
});
