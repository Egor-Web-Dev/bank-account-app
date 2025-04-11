import getMonthsAgoDate from "../../../utils/getMonthsAgoDate";

function groupTransactionsByMonths(countMonths, transactions) {
  return new Array(countMonths)
    .fill("")
    .map((m, i) => filterTransactionsByDate(getMonthsAgoDate(i), transactions));
}

function filterTransactionsByDate(date, transactions) {
  const targetMonth = date.getMonth() + 1;
  const targetYear = date.getFullYear();

  return transactions.filter((t) => {
    const tDate = new Date(t.date);
    const tMonth = tDate.getMonth() + 1;
    const tYear = tDate.getFullYear();

    return tMonth === targetMonth && tYear === targetYear;
  });
}

export default groupTransactionsByMonths;
