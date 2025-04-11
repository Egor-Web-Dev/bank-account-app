import ACCOUNTS_PAGE_CLASS_NAME from "../../../pages/accounts/pageClassName";
import createLoaderSkeleton from "../../blocks/LoaderSkeleton/createLoaderSkeleton";

const DEFAULT_COUNT_ITEMS = 9;

function createAccountsBodyLoader(countItems = DEFAULT_COUNT_ITEMS) {
  const container = document.createElement("div");
  const list = document.createElement("ul");

  container.classList.add(`${ACCOUNTS_PAGE_CLASS_NAME}__body`);
  list.classList.add(
    `${ACCOUNTS_PAGE_CLASS_NAME}__list`,
    "list",
    "list-reset",
    "flex",
  );

  for (let i = 0; i < countItems; i++) {
    list.append(
      createLoaderSkeleton(
        `${ACCOUNTS_PAGE_CLASS_NAME}__item`,
        `${ACCOUNTS_PAGE_CLASS_NAME}__item--loader`,
      ),
    );
  }

  container.append(list);

  return container;
}

export default createAccountsBodyLoader;
