const tableState = {
  currentPage: 1,
  totalPages: 0,
  entriesPerPage: 0,
};

function setTableState(newState) {
  Object.assign(tableState, { ...newState });
}

function getTableState() {
  return { ...tableState };
}

function setCurrentPage(currentPage) {
  tableState.currentPage = currentPage;
}

function getCurrentPage() {
  return tableState.currentPage;
}

export { setTableState, getTableState, setCurrentPage, getCurrentPage };
