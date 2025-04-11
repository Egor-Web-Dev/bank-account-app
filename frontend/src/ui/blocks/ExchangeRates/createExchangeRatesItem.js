import createDashLine from "../DashLine/createDashLine";
import EXCHANGE_PAGE_CLASS_NAME from "../../../pages/exchange/pageClassName";

function createExchangeRatesItem({ codes, rate, change = 0 }) {
  const item = document.createElement("li");
  const name = document.createElement("span");
  const value = document.createElement("span");

  item.id = codes;
  item.classList.add(
    getItemModifier(change),
    "rate-changes__item",
    "rate-changes__item",
    "flex",
  );

  name.textContent = codes;
  name.classList.add(`${EXCHANGE_PAGE_CLASS_NAME}__name`);

  value.textContent = rate;
  value.classList.add(`${EXCHANGE_PAGE_CLASS_NAME}__amount`);

  item.append(name, createDashLine(), value);

  return item;
}

function getItemModifier(change) {
  if (change > 0) {
    return "rate-changes__item--increase";
  } else if (change < 0) {
    return "rate-changes__item--decrease";
  }
}

export default createExchangeRatesItem;
