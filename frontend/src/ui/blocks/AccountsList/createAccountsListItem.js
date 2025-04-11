import createAccountCard from "./createAccountCard";
import ACCOUNTS_PAGE_CLASS_NAME from "../../../pages/accounts/pageClassName";

function createAccountsListItem({ account, balance, transactions }) {
  const item = document.createElement("li");

  item.classList.add(`${ACCOUNTS_PAGE_CLASS_NAME}__item`);

  item.append(createAccountCard(account, balance, transactions[0]?.date));

  return item;
}

export default createAccountsListItem;
