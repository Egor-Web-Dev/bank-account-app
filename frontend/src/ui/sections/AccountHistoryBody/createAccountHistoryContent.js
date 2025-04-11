import "./accountHistoryBody.scss";
import getAccountInfoData from "./getAccountInfoData";
import createTopRow from "../../blocks/AccountInfoTopRow/createTopRow";
import createChartBalance from "../../blocks/ChartBalance/createChartBalance";
import createLinkToHistoryPage from "../../blocks/LinkToHistoryPage/createLinkToHistoryPage";
import createNewTransactionBlock from "../../blocks/NewTransactionForm/createNewTransationBlock";
import ACCOUNT_HISTORY_CLASS_NAME from "../../../pages/accountInfo/accountHistory/pageClassName";
import createTransactionsTableBlock from "../../blocks/TransactionsTable/createTransactionsTableBlock";

const DEFAULT_COUNT_MONTHS = 6;
const DEFAULT_TABLE_STATE = {
  entriesPerPage: 10,
  totalPages: 0,
};

function createAccountHistoryContent() {
  const accountBody = document.createElement("div");
  const middleRow = document.createElement("div");
  const { accountInfo, labelMonths, groupTransactions } =
    getAccountInfoData(DEFAULT_COUNT_MONTHS);

  const topRow = createTopRow(accountInfo.account, accountInfo.balance);

  const linkForChart = createLinkToHistoryPage(accountInfo.account);
  const linkForTable = createLinkToHistoryPage(accountInfo.account);
  const transactionsForm = createNewTransactionBlock();
  const transactionsTable = createTransactionsTableBlock(DEFAULT_TABLE_STATE);
  const balanceChart = createChartBalance(
    accountInfo,
    groupTransactions,
    labelMonths,
  );

  accountBody.classList.add(`${ACCOUNT_HISTORY_CLASS_NAME}__body`, "flex");
  balanceChart.classList.add(`${ACCOUNT_HISTORY_CLASS_NAME}__balance-chart`);
  topRow.classList.add(`${ACCOUNT_HISTORY_CLASS_NAME}__top-row`);
  middleRow.classList.add(
    `${ACCOUNT_HISTORY_CLASS_NAME}__middle-row`,
    "middle-row",
    "flex",
  );

  middleRow.append(transactionsForm, balanceChart);
  balanceChart.append(linkForChart);
  transactionsTable.append(linkForTable);
  accountBody.append(topRow, middleRow, transactionsTable);

  return accountBody;
}

export default createAccountHistoryContent;
