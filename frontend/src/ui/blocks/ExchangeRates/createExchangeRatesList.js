import createExchangeRatesItem from "./createExchangeRatesItem";
import EXCHANGE_PAGE_CLASS_NAME from "../../../pages/exchange/pageClassName";

function createExchangeRatesList(exchangeRates = {}) {
  const list = document.createElement("ul");

  list.classList.add(
    `${EXCHANGE_PAGE_CLASS_NAME}__list`,
    "rate-changes__list",
    "list-reset",
    "flex",
  );

  for (const k in exchangeRates) {
    list.append(createExchangeRatesItem({ codes: k, rate: exchangeRates[k] }));
  }

  return list;
}

export default createExchangeRatesList;
