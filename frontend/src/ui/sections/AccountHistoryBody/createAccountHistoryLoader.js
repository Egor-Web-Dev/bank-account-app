import ACCOUNT_HISTORY_CLASS_NAME from "../../../pages/accountInfo/accountHistory/pageClassName";
import createTopRowLoader from "../../blocks/AccountInfoTopRow/createTopRowLoader";
import createLoaderSkeleton from "../../blocks/LoaderSkeleton/createLoaderSkeleton";

function createAccountHistoryLoader() {
  const accountBody = document.createElement("div");
  const middleRow = document.createElement("div");
  const topRowLoader = createTopRowLoader();
  const formLoader = createLoaderSkeleton(
    `${ACCOUNT_HISTORY_CLASS_NAME}__new-transaction`,
    "new-transaction--loader",
    "form-wrapper",
  );
  const tableLoader = createLoaderSkeleton(
    `${ACCOUNT_HISTORY_CLASS_NAME}__table-wrapper`,
    "table-wrapper",
    "table-wrapper--loader",
  );
  const chartLoader = createLoaderSkeleton("chart", "chart--loader");

  middleRow.classList.add(
    `${ACCOUNT_HISTORY_CLASS_NAME}__middle-row`,
    "middle-row",
    "flex",
  );
  accountBody.classList.add(`${ACCOUNT_HISTORY_CLASS_NAME}__body`, "flex");

  middleRow.append(formLoader, chartLoader);
  accountBody.append(topRowLoader, middleRow, tableLoader);

  return accountBody;
}

export default createAccountHistoryLoader;
