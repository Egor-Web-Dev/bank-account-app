import "./dashLine.scss";

function createDashLine() {
  const dashLine = document.createElement("span");
  dashLine.classList.add("dash-line");
  return dashLine;
}

export default createDashLine;
