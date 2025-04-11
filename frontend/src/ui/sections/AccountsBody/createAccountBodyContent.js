import ACCOUNTS_PAGE_CLASS_NAME from "../../../pages/accounts/pageClassName";
import createAccountsList from "../../blocks/AccountsList/createAccountsList";
import createWrapper from "../../blocks/Wrapper/createWrapper";

function createAccountsContent(accounts) {
  const wrapper = createWrapper(`${ACCOUNTS_PAGE_CLASS_NAME}__body`);
  wrapper.append(createAccountsList(accounts));
  return wrapper;
}

export default createAccountsContent;
