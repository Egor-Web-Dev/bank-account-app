import handleArrowClick from "./handleArrowClick";

function createArrowBtn(title, type, icon) {
  const arrowBtn = document.createElement("button");

  arrowBtn.type = type;
  arrowBtn.title = title;
  arrowBtn.innerHTML = icon;
  arrowBtn.classList.add("pagination__arrow-btn", "btn-reset", "btn");
  arrowBtn.addEventListener("click", handleArrowClick);

  return arrowBtn;
}

export default createArrowBtn;
