import "./currencyExchangeBody.scss";
import EXCHANGE_PAGE_CLASS_NAME from "../../../pages/exchange/pageClassName";
import createExchangeFormBlock from "../../blocks/ExchangeForm/createExchangeFormBlock";
import createExchangeRatesBlock from "../../blocks/ExchangeRates/createExchangeRatesBlock";
import createClientCurrenciesBlock from "../../blocks/ClientCurrencies/createClientCurrenciesBlock";

function createExchangeContent() {
  const body = document.createElement("div");
  const leftSide = document.createElement("div");
  const rightSide = document.createElement("div");

  body.classList.add(`${EXCHANGE_PAGE_CLASS_NAME}__body`, "flex");
  leftSide.classList.add(`${EXCHANGE_PAGE_CLASS_NAME}__left-side`, "flex");
  rightSide.classList.add(`${EXCHANGE_PAGE_CLASS_NAME}__right-side`, "flex");

  leftSide.append(createClientCurrenciesBlock(), createExchangeFormBlock());
  rightSide.append(createExchangeRatesBlock());

  body.append(leftSide, rightSide);

  return body;
}

export default createExchangeContent;
