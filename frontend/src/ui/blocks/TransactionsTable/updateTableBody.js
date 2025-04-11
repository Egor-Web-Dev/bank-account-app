import createTableBody from "./createTableBody";

function updateTableBody(transactions) {
  const oldTableBody = document.querySelector(".transactions-table__body");
  oldTableBody?.replaceWith(createTableBody(transactions));
}

export default updateTableBody;
