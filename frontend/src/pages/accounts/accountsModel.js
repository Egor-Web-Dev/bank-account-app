const accountsModel = {
  userAccounts: [],
};

function getUserAccounts() {
  return [...accountsModel.userAccounts];
}

function setAccountsData(data) {
  if (data) accountsModel.userAccounts = [...data];
}

export { getUserAccounts, setAccountsData };
