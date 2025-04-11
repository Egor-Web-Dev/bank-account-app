import "./canvas.scss";

function createCanvas() {
  const canvas = document.createElement("canvas");
  canvas.classList.add("canvas");
  return canvas;
}

export default createCanvas;
