function calcMonthlyTransactionsRatio(budget) {
  return budget.map(({ income, expenses }) => {
    const total = income + expenses;
    const incomePercent = calcPercentage(total, income);
    const expensesPercent = calcPercentage(total, expenses);

    return { incomePercent, expensesPercent };
  });
}

function calcPercentage(total, part) {
  return Math.round((part / total) * 100) || 0;
}

export default calcMonthlyTransactionsRatio;
