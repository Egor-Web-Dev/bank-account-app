import updatePagination from "./updatePagination";

function handleClick(activeItem, currentItem) {
  const pageNumber = Number(currentItem.textContent);
  const pagination = document.querySelector(".pagination");

  activeItem.classList.remove("pagination__item--active");
  currentItem.classList.add("pagination__item--active");

  pagination.dispatchEvent(
    new CustomEvent("clickitem", { detail: pageNumber }),
  );

  updatePagination(pageNumber);
}

export default handleClick;
