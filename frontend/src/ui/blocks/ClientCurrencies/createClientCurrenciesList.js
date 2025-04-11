import createClientCurrenciesItem from "./createClientCurrenciesItem";
import EXCHANGE_PAGE_CLASS_NAME from "../../../pages/exchange/pageClassName";

function createClientCurrenciesList(currencies) {
  const list = document.createElement("ul");

  list.classList.add(
    `${EXCHANGE_PAGE_CLASS_NAME}__list`,
    "client-currencies__list",
    "list-reset",
    "flex",
  );

  for (const k in currencies) {
    currencies[k].amount &&
      list.append(createClientCurrenciesItem(currencies[k]));
  }

  return list;
}

export default createClientCurrenciesList;
