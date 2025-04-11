import createPaginationItem from "./createPaginationItem";

function createPaginationList({ startItem, endItem, currentPage, totalPages }) {
  const paginationList = document.createElement("ul");

  paginationList.classList.add("pagination__list", "list-reset", "flex");

  for (let i = startItem; i <= endItem; i++) {
    const item = createPaginationItem(i);

    if (currentPage === i) item.classList.add("pagination__item--active");

    paginationList.append(item);
  }

  if (startItem > 2) {
    const { item, elipsisItem } = createExtraItem(1);
    paginationList.prepend(item, elipsisItem);
  }

  if (totalPages !== endItem) {
    const { item, elipsisItem } = createExtraItem(totalPages);
    paginationList.append(elipsisItem, item);
  }

  return paginationList;
}

function createExtraItem(itemName) {
  const item = createPaginationItem(itemName);
  const elipsisItem = document.createElement("li");

  elipsisItem.textContent = "...";

  return { item, elipsisItem };
}

export default createPaginationList;
