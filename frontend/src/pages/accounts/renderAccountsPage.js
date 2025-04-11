import fetchAccounts from "../../api/fetchAccounts";
import getCleanMain from "../../utils/getCleanMain";
import SearchParams from "../../utils/SearchParams";
import createAccountsPage from "./createAccountsPage";
import renderErrorPage from "../errorPage/renderErrorPage";
import sortUserAccounts from "../../ui/blocks/AccountsList/sortUserAccounts";
import updateAccountsBody from "../../ui/sections/AccountsBody/updateAccountsBody";
import { setAccountsData } from "./accountsModel";
import { setNavState } from "../../ui/blocks/Navigation/navigationState";

async function renderAccountsPage() {
  const search = SearchParams.get("sort");

  getCleanMain().append(createAccountsPage());
  setNavState({ activeItem: "Счета", isShown: true });

  fetchAccounts().then(({ payload, error }) => {
    if (error) return renderErrorPage(error);

    const data = search ? sortUserAccounts(payload, search) : payload;

    setAccountsData(data);
    updateAccountsBody(data);
  });
}

export default renderAccountsPage;
