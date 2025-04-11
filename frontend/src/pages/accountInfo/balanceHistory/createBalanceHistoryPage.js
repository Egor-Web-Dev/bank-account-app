import ACCOUNT_HISTORY_CLASS_NAME from "./pageClassName";
import createContentWrapper from "../../../ui/blocks/ContentWrapper/createContentWrapper";
import createAccountInfoHeader from "../../../ui/sections/AccountInfoHeader/createAccountInfoHeader";
import createBalanceHistoryLoader from "../../../ui/sections/BalanceHistoryBody/createBalanceHistoryLoader";

const HEADER_OPTION = {
  title: "История баланса",
  className: ACCOUNT_HISTORY_CLASS_NAME,
};

function createBalanceHistoryPage() {
  const { section, content } = createContentWrapper(ACCOUNT_HISTORY_CLASS_NAME);

  content.append(
    createAccountInfoHeader(HEADER_OPTION),
    createBalanceHistoryLoader(),
  );

  return section;
}

export default createBalanceHistoryPage;
