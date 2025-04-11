import renderAccountInfoPage from "../renderAccountInfoPage";
import createBalanceHistoryPage from "./createBalanceHistoryPage";
import updateBalanceHistoryBody from "../../../ui/sections/BalanceHistoryBody/updateBalanceHistoryBody";

function renderBalanceHistoryPage(accountNumber) {
  renderAccountInfoPage(
    accountNumber,
    createBalanceHistoryPage,
    updateBalanceHistoryBody,
  );
}

export default renderBalanceHistoryPage;
