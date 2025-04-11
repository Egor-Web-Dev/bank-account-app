import createTHeadCell from "./createTHeadCell";
import createTableBody from "./createTableBody";

function createTransactionsTable(headCells, transactions) {
  const table = document.createElement("table");
  const tHead = document.createElement("thead");
  const tHeadRowWrap = document.createElement("tr");
  const tHeadRow = document.createElement("tr");
  const tBody = createTableBody(transactions);

  table.classList.add("account-info__table", "transactions-table");
  tHead.classList.add("transactions-table__head");
  tHeadRowWrap.classList.add(
    "transactions-table__head-row",
    "transactions-table__row-wrapper",
  );
  tHeadRow.classList.add(
    "transactions-table__head-row",
    "transactions-table__row",
    "flex",
  );

  headCells.forEach((c) => tHeadRow.append(createTHeadCell(c)));

  tHeadRowWrap.append(tHeadRow);
  tHead.append(tHeadRowWrap);
  table.append(tHead, tBody);

  return table;
}

export default createTransactionsTable;
