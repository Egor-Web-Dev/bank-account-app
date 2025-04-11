import renderAccountInfoPage from "../renderAccountInfoPage";
import createAccountHistoryPage from "./createAccountHistoryPage";
import updateAccountHistoryBody from "../../../ui/sections/AccountHistoryBody/updateAccountHistoryBody";

function renderAccountHistoryPage(accountNumber) {
  renderAccountInfoPage(
    accountNumber,
    createAccountHistoryPage,
    updateAccountHistoryBody,
  );
}

export default renderAccountHistoryPage;
