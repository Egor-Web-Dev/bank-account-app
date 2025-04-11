import createTopRowLoader from "../../blocks/AccountInfoTopRow/createTopRowLoader";
import createLoaderSkeleton from "../../blocks/LoaderSkeleton/createLoaderSkeleton";

const BLOCK_CLASS_NAME = "account-history";

function createBalanceHistoryLoader() {
  const container = document.createElement("div");
  const topRowLoader = createTopRowLoader();
  const bChartLoader = createLoaderSkeleton("chart", "chart--loader");
  const rChartLoader = createLoaderSkeleton("chart", "chart--loader");
  const tableLoader = createLoaderSkeleton(
    `${BLOCK_CLASS_NAME}__table-wrapper`,
    "table-wrapper",
    "table-wrapper--loader",
  );

  container.classList.add(`${BLOCK_CLASS_NAME}__body`, "flex");

  container.append(topRowLoader, bChartLoader, rChartLoader, tableLoader);

  return container;
}

export default createBalanceHistoryLoader;
