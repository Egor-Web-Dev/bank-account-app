function extractColors(dataIncome, dataExpenses) {
  const incomeMax = Math.max(...dataIncome.data);
  const expenseMax = Math.max(...dataExpenses.data);
  const colors = [dataIncome.backgroundColor, dataExpenses.backgroundColor];

  if (incomeMax > expenseMax) return colors.reverse();
  return colors;
}

export default extractColors;
