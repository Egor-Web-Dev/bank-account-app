import updateTableBody from "./updateTableBody";
import getNextTransactions from "./getNextTransactions";
import scrollToElement from "../../../utils/scrollToElement";
import { setCurrentPage } from "./tableState";

function handlePaginationClick(pageNumber) {
  setCurrentPage(pageNumber);
  updateTableBody(getNextTransactions());
  scrollToElement("transactions-table");
}

export default handlePaginationClick;
