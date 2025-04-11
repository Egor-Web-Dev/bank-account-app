import createTableRow from "./createTableRow";

function createTableBody(transactions) {
  const tableBody = document.createElement("tbody");

  tableBody.classList.add("transactions-table__body");

  transactions.forEach((t) => tableBody.append(createTableRow(t)));

  return tableBody;
}

export default createTableBody;
