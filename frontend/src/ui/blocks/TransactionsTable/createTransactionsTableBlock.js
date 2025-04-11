import "./transactionsTable.scss";
import createTransactionsTable from "./createTable";
import createSection from "../Section/createSection";
import handlePaginationClick from "./handlePaginationClick";
import createPagination from "../Pagination/createPagination";
import { setTableState } from "./tableState";
import { getAccountTransactions } from "../../../pages/accountInfo/accountInfoModel";

const DEFAULT_CURRENT_PAGE = 1;
const PAGINATION_COUNT_ITEMS = 3;

const BLOCK_OPTION = {
  title: "История переводов",
  className: "table-wrapper",
};

const TABLE_HEAD_CELL = [
  "Счёт отправителя",
  "Счёт получателя",
  "Сумма",
  "Дата",
];

function createTransactionsTableBlock(tableState) {
  const limitedTransactions = getAccountTransactions(tableState.entriesPerPage);
  const table = createTransactionsTable(TABLE_HEAD_CELL, limitedTransactions);
  const wrapper = createSection(
    "h2",
    BLOCK_OPTION.title,
    BLOCK_OPTION.className,
    "account-info__table-wrapper",
    "flex",
  );

  setTableState({ ...tableState, currentPage: DEFAULT_CURRENT_PAGE });

  wrapper.id = "transactions-table";

  wrapper.append(table);

  if (tableState.totalPages > 1) {
    const options = {
      totalPages: tableState.totalPages,
      currentPage: DEFAULT_CURRENT_PAGE,
      countItems: PAGINATION_COUNT_ITEMS,
      handler: handlePaginationClick,
    };

    wrapper.append(createPagination(options));
  }

  return wrapper;
}

export default createTransactionsTableBlock;
