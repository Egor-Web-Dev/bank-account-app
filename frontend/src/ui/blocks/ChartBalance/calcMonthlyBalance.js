function calcMonthlyBalance(account, balance, groupTransactions) {
  const result = [balance];

  groupTransactions.forEach((t, i) => {
    result.push(calcMonthBalance(result[i], account, t));
  });

  return result;
}

function calcMonthBalance(currentBalance, accountNumber, transactions) {
  return transactions.reduce((acc, t) => {
    if (t.from === accountNumber) return acc + t.amount;

    return acc - t.amount;
  }, currentBalance);
}

export default calcMonthlyBalance;
