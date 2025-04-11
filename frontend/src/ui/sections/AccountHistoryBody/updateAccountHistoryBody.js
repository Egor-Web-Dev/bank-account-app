import createAccountHistoryContent from "./createAccountHistoryContent";
import ACCOUNT_HISTORY_CLASS_NAME from "../../../pages/accountInfo/accountHistory/pageClassName";

function updateAccountHistoryBody() {
  const oldBody = document.querySelector(
    `.${ACCOUNT_HISTORY_CLASS_NAME}__body`,
  );
  oldBody?.replaceWith(createAccountHistoryContent());
}

export default updateAccountHistoryBody;
