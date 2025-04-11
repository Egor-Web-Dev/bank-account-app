function calcPaginationOption(data) {
  const startItem = calcStartItem(data);

  return {
    startItem,
    endItem: calcEndItem({ ...data, startItem }),
    currentPage: data.currentPage,
    totalPages: data.totalPages,
  };
}

function calcEndItem({ startItem, countItems, totalPages }) {
  return Math.min(startItem + countItems - 1, totalPages);
}

function calcStartItem({ currentPage, countItems, totalPages }) {
  return Math.max(
    1,
    Math.min(
      currentPage - Math.floor(countItems / 2),
      totalPages - Math.floor((2 * countItems - 1) / 2),
    ),
  );
}

export default calcPaginationOption;
