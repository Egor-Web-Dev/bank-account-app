const accountInfoModel = {
  account: null,
  balance: 0,
  transactions: [],
};

function setAccountInfo(data) {
  Object.assign(accountInfoModel, {
    ...data,
    transactions: [...data.transactions],
  });
}

function getAccountInfo() {
  return { ...accountInfoModel };
}

function getAccountTransactions(limit = Infinity, skip = 0) {
  const endIndex = Math.min(limit + skip, accountInfoModel.transactions.length);
  const transactions = accountInfoModel.transactions.slice(skip, endIndex);

  return transactions;
}

export { setAccountInfo, getAccountInfo, getAccountTransactions };
