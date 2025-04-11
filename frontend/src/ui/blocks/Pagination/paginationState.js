const paginationState = {
  currentPage: 1,
  totalPages: 0,
  countItems: 0,
  handler: null,
};

function setPaginationState(data) {
  Object.assign(paginationState, { ...data });
}

function getPaginationState() {
  return { ...paginationState };
}

export { setPaginationState, getPaginationState };
