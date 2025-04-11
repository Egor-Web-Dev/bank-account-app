import createPagination from "./createPagination";
import { getPaginationState } from "./paginationState";

function updatePagination(currentPage) {
  const oldEl = document.querySelector(".pagination");
  oldEl?.replaceWith(
    createPagination({
      ...getPaginationState(),
      currentPage,
    }),
  );
}

export default updatePagination;
