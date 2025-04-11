import getCleanMain from "../../utils/getCleanMain";
import DateFormatter from "../../utils/DateFormatter";
import fetchAccountInfo from "../../api/fetchAccountInfo";
import renderErrorPage from "../errorPage/renderErrorPage";
import { getAccountInfo, setAccountInfo } from "./accountInfoModel";
import { setNavState } from "../../ui/blocks/Navigation/navigationState";

function renderAccountInfoPage(accountNumber, createPageFn, updatePageFn) {
  setNavState({ activeItem: "", isShown: true });
  getCleanMain().append(createPageFn());

  if (getAccountInfo().account) updatePageFn();

  fetchAccountInfo(accountNumber).then(({ payload, error }) => {
    if (error) return renderErrorPage(error);

    setAccountInfo({
      ...payload,
      ...sortTransactionsByDate(payload.transactions),
    });

    updatePageFn();
  });
}

function sortTransactionsByDate(transactions) {
  return transactions.sort((a, b) => {
    const aMs = new DateFormatter(a.date).getMilliseconds();
    const bMs = new DateFormatter(b.date).getMilliseconds();

    return bMs - aMs;
  });
}

export default renderAccountInfoPage;
