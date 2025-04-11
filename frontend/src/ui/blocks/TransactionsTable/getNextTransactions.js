import { getTableState } from "./tableState";
import { getAccountTransactions } from "../../../pages/accountInfo/accountInfoModel";

function getNextTransactions() {
  const { currentPage, entriesPerPage } = getTableState();

  return getAccountTransactions(
    entriesPerPage,
    (currentPage - 1) * entriesPerPage,
  );
}

export default getNextTransactions;
