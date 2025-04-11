import handleItemClick from "./handleItemClick";

const BTN_TYPE = "button";

function createPaginationItem(index) {
  const item = document.createElement("li");
  const btn = document.createElement("button");

  item.classList.add("pagination__item");

  btn.type = BTN_TYPE;
  btn.textContent = index;
  btn.classList.add("pagination__btn", "btn-reset", "btn");
  btn.addEventListener("click", handleItemClick);

  item.append(btn);

  return item;
}

export default createPaginationItem;
