function createTBodyCell(text, ...classNames) {
  const cell = document.createElement("td");

  cell.textContent = text;

  classNames.forEach((c) => cell.classList.add(c));

  return cell;
}

export default createTBodyCell;
