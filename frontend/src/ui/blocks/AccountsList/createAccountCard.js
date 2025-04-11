import renderPage from "../../../pages/renderPage";
import createWrapper from "../Wrapper/createWrapper";
import DateFormatter from "../../../utils/DateFormatter";
import PrimaryBtnOptions from "../PrimaryButton/PrimaryBtnOptions";
import createPrimaryButton from "../PrimaryButton/createPrimaryButton";
import ACCOUNTS_PAGE_CLASS_NAME from "../../../pages/accounts/pageClassName";

const LAST_TRANSACTION_TEXT = "Последняя транзакция:";
const OPEN_BTN_OPTIONS = new PrimaryBtnOptions("Открыть");

function createAccountCard(number, balance, transactionDate) {
  const card = document.createElement("div");
  const bottomRow = document.createElement("div");
  const accountNumber = document.createElement("p");
  const balanceEl = document.createElement("p");
  const openBtn = createPrimaryButton(OPEN_BTN_OPTIONS);

  bottomRow.classList.add("card__bottom-row", "flex");

  card.setAttribute("data-test-id", `card-${number}`);
  card.classList.add(`${ACCOUNTS_PAGE_CLASS_NAME}__card`, "card", "flex");

  accountNumber.textContent = number;
  accountNumber.classList.add("card__id", "flex");

  balanceEl.textContent = `${balance} ₽`;
  balanceEl.classList.add("card__balance", "flex");

  if (transactionDate) {
    const dateLastTransaction = new DateFormatter(
      transactionDate,
    ).getDateWithMonthName();

    bottomRow.append(createTransactionBlock(dateLastTransaction));
  }

  openBtn.classList.add("card__btn");
  openBtn.setAttribute("data-test-id", "open-info");
  openBtn.addEventListener("click", handleOpenBtnClick(number));

  bottomRow.append(openBtn);
  card.append(accountNumber, balanceEl, bottomRow);

  return card;
}

function createTransactionBlock(transactionDate) {
  const wrapper = createWrapper("card__transaction-block");
  const transactionPar = document.createElement("p");
  const dateTransaction = document.createElement("p");

  transactionPar.textContent = LAST_TRANSACTION_TEXT;
  transactionPar.classList.add("card__transaction", "flex");

  dateTransaction.textContent = transactionDate;
  dateTransaction.classList.add("card__date-transaction", "flex");

  wrapper.append(transactionPar, dateTransaction);

  return wrapper;
}

function handleOpenBtnClick(accountNumber) {
  return (e) => {
    history.pushState(null, "", `/account/${accountNumber}`);
    renderPage();
  };
}

export default createAccountCard;
