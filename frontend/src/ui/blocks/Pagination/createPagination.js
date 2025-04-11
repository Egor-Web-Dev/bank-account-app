import "./pagination.scss";
import icon from "../../../assets/images/icon";
import createArrowBtn from "./createArrowBtn";
import calcPaginationOption from "./calcPaginationOption";
import createPaginationList from "./createPaginationList";
import { setPaginationState } from "./paginationState";

const BTN_TYPE = "button";
const NEXT_BTN_TITLE = "Следующая страница";
const PREV_BTN_TITLE = "Предыдущая страница";

function createPagination(option) {
  const pagination = document.createElement("div");
  const nextBtn = createArrowBtn(NEXT_BTN_TITLE, BTN_TYPE, icon.arrowRight);
  const prevBtn = createArrowBtn(PREV_BTN_TITLE, BTN_TYPE, icon.arrowLeft);
  const paginationList = createPaginationList(calcPaginationOption(option));

  pagination.classList.add("pagination", "flex");
  pagination.addEventListener("clickitem", (e) => option.handler(e.detail));

  nextBtn.disabled = option.currentPage === option.totalPages;
  nextBtn.setAttribute("data-value", "next");

  prevBtn.disabled = option.currentPage === 1;
  prevBtn.setAttribute("data-value", "prev");

  setPaginationState({ ...option });

  pagination.append(prevBtn, paginationList, nextBtn);

  return pagination;
}

export default createPagination;
