import "./accountsList.scss";
import createAccountsListItem from "./createAccountsListItem";
import ACCOUNTS_PAGE_CLASS_NAME from "../../../pages/accounts/pageClassName";

function createAccountsList(accounts) {
  const list = document.createElement("ul");

  list.setAttribute("data-test-id", "accounts-list");
  list.classList.add(
    `${ACCOUNTS_PAGE_CLASS_NAME}__list`,
    "list",
    "list-reset",
    "flex",
  );

  accounts.forEach((a) => list.append(createAccountsListItem(a)));

  return list;
}

export default createAccountsList;
