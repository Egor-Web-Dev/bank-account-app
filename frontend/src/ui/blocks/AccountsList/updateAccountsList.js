import createAccountsList from "./createAccountsList";
import ACCOUNTS_PAGE_CLASS_NAME from "../../../pages/accounts/pageClassName";

function updateAccountsList(data) {
  const oldBody = document.querySelector(`.${ACCOUNTS_PAGE_CLASS_NAME}__list`);
  oldBody?.replaceWith(createAccountsList(data));
}

export default updateAccountsList;
