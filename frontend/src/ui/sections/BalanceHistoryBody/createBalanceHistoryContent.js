import "./balanceHistoryBody.scss";
import createTopRow from "../../blocks/AccountInfoTopRow/createTopRow";
import getAccountInfoData from "../AccountHistoryBody/getAccountInfoData";
import createChartBalance from "../../blocks/ChartBalance/createChartBalance";
import createChartTransactionsRatio from "../../blocks/ChartTransactionsRatio/createChartRatio";
import createTransactionsTableBlock from "../../blocks/TransactionsTable/createTransactionsTableBlock";

const BLOCK_CLASS_NAME = "account-history";
const DEFAULT_TABLE_PAGES = 25;
const DEFAULT_COUNT_MONTHS = 12;

function createBalanceHistoryContent() {
  const accountBody = document.createElement("div");
  const { accountInfo, labelMonths, groupTransactions } =
    getAccountInfoData(DEFAULT_COUNT_MONTHS);

  const topRow = createTopRow(accountInfo.account, accountInfo.balance);

  const tableState = {
    entriesPerPage: DEFAULT_TABLE_PAGES,
    totalPages: Math.floor(
      accountInfo.transactions.length / DEFAULT_TABLE_PAGES,
    ),
  };

  const transactionsTable = createTransactionsTableBlock(tableState);

  const balanceChart = createChartBalance(
    accountInfo,
    groupTransactions,
    labelMonths,
  );

  const ratioChart = createChartTransactionsRatio(
    accountInfo.account,
    groupTransactions,
    labelMonths,
  );

  accountBody.classList.add(`${BLOCK_CLASS_NAME}__body`, "flex");
  topRow.classList.add(`${BLOCK_CLASS_NAME}__top-row`);

  accountBody.append(topRow, balanceChart, ratioChart, transactionsTable);

  return accountBody;
}

export default createBalanceHistoryContent;
