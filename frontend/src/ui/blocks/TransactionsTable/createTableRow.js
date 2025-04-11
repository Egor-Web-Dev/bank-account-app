import createTBodyCell from "./createTBodyCell";
import DateFormatter from "../../../utils/DateFormatter";
import { getAccountInfo } from "../../../pages/accountInfo/accountInfoModel";

function createTableRow(transaction) {
  const tableRowWrap = document.createElement("tr");
  const tableRow = document.createElement("tr");

  const amountState = {
    mathSign: "+",
    className: "amount-cell--input",
  };

  if (getAccountInfo().account === transaction.from) {
    amountState.mathSign = "-";
    amountState.className = "amount-cell--output";
  }

  const fromCell = createTBodyCell(
    transaction.from,
    "transactions-table__body-cell",
    "transactions-table__cell",
  );
  const toCell = createTBodyCell(
    transaction.to,
    "transactions-table__body-cell",
    "transactions-table__cell",
  );
  const amountCell = createTBodyCell(
    `${amountState.mathSign} ${transaction.amount} ₽`,
    `${amountState.className}`,
    "transactions-table__body-cell",
    "transactions-table__cell",
    "amount-cell",
  );
  const dateCell = createTBodyCell(
    new DateFormatter(transaction.date).getNumericDateString(),
    "transactions-table__body-cell",
    "transactions-table__cell",
  );

  tableRowWrap.classList.add(
    "transactions-table__body-row",
    "transactions-table__row-wrapper",
    "flex",
  );

  tableRow.classList.add("transactions-table__row", "flex");

  tableRow.append(fromCell, toCell, amountCell, dateCell);
  tableRowWrap.append(tableRow);

  return tableRowWrap;
}

export default createTableRow;
