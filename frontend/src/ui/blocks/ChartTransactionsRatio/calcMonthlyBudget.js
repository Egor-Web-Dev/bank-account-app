function calcMonthlyBudget(accountNumber, groupTransactions) {
  return groupTransactions.map((g) => calcMonthBudget(accountNumber, g));
}

function calcMonthBudget(accountNumber, transactions) {
  const result = {
    income: 0,
    expenses: 0,
  };

  transactions.forEach((t) => {
    if (t.from === accountNumber) {
      result.expenses += t.amount;
    } else {
      result.income += t.amount;
    }
  });

  return result;
}

export default calcMonthlyBudget;
