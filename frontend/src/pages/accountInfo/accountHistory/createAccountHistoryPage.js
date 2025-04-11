import ACCOUNT_HISTORY_CLASS_NAME from "./pageClassName";
import createContentWrapper from "../../../ui/blocks/ContentWrapper/createContentWrapper";
import createAccountInfoHeader from "../../../ui/sections/AccountInfoHeader/createAccountInfoHeader";
import createAccountHistoryLoader from "../../../ui/sections/AccountHistoryBody/createAccountHistoryLoader";

const HEADER_OPTION = {
  title: "Просмотр счёта",
  className: ACCOUNT_HISTORY_CLASS_NAME,
};

function createAccountHistoryPage() {
  const { section, content } = createContentWrapper(ACCOUNT_HISTORY_CLASS_NAME);

  content.append(
    createAccountInfoHeader(HEADER_OPTION),
    createAccountHistoryLoader(),
  );

  return section;
}

export default createAccountHistoryPage;
