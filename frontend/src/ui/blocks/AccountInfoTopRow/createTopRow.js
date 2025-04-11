import "./topRow.scss";

function createTopRow(accountNumber, balance) {
  const row = document.createElement("div");
  const accountNum = document.createElement("p");
  const balanceWrap = document.createElement("div");
  const balanceText = document.createElement("span");
  const balanceAmount = document.createElement("span");

  row.classList.add("top-row", "flex");
  balanceWrap.classList.add("top-row__balance-wrapper", "flex");

  accountNum.textContent = `№ ${accountNumber}`;
  accountNum.classList.add("top-row__account-number", "flex");

  balanceText.textContent = "Баланс";
  balanceText.classList.add("top-row__balance-text");

  balanceAmount.textContent = `${balance} ₽`;
  balanceAmount.setAttribute("data-test-id", "account-balance");

  balanceWrap.append(balanceText, balanceAmount);
  row.append(accountNum, balanceWrap);

  return row;
}

export default createTopRow;
