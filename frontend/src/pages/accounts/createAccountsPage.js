import ACCOUNTS_PAGE_CLASS_NAME from "./pageClassName";
import createContentWrapper from "../../ui/blocks/ContentWrapper/createContentWrapper";
import createAccountsHeader from "../../ui/sections/AccountsHeader/createAccountsHeader";
import createAccountsBodyLoader from "../../ui/sections/AccountsBody/createAccountsBodyLoader";

function createAccountsPage() {
  const { section, content } = createContentWrapper(ACCOUNTS_PAGE_CLASS_NAME);

  content.append(createAccountsHeader(), createAccountsBodyLoader());

  return section;
}

export default createAccountsPage;
