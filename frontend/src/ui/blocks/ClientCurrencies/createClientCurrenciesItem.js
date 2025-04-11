import createDashLine from "../DashLine/createDashLine";
import EXCHANGE_PAGE_CLASS_NAME from "../../../pages/exchange/pageClassName";

function createClientCurrenciesItem({ code, amount }) {
  const item = document.createElement("li");
  const name = document.createElement("span");
  const value = document.createElement("span");

  item.classList.add(`${EXCHANGE_PAGE_CLASS_NAME}__item`, "flex");

  name.textContent = code;
  name.classList.add(`${EXCHANGE_PAGE_CLASS_NAME}__name`);

  value.textContent = amount;
  value.classList.add(`${EXCHANGE_PAGE_CLASS_NAME}__amount`);

  item.append(name, createDashLine(), value);

  return item;
}

export default createClientCurrenciesItem;
