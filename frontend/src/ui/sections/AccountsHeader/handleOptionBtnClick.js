import SearchParams from "../../../utils/SearchParams";
import sortUserAccounts from "../../blocks/AccountsList/sortUserAccounts";
import updateAccountsList from "../../blocks/AccountsList/updateAccountsList";
import { getUserAccounts } from "../../../pages/accounts/accountsModel";

function handleOptionBtnClick(e) {
  const optionValue = e.currentTarget.getAttribute("data-value");

  if (optionValue === SearchParams.get("sort")) return;

  SearchParams.set("sort", optionValue);

  updateAccountsList(sortUserAccounts(getUserAccounts(), optionValue));
}

export default handleOptionBtnClick;
