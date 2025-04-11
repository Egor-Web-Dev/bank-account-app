function createTHeadCell(cellName) {
  const headCell = document.createElement("th");

  headCell.classList.add(
    "transactions-table__head-cell",
    "transactions-table__cell",
  );

  headCell.textContent = cellName;

  return headCell;
}

export default createTHeadCell;
