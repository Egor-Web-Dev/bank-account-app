import EXCHANGE_PAGE_CLASS_NAME from "../../../pages/exchange/pageClassName";
import createLoaderSkeleton from "../../blocks/LoaderSkeleton/createLoaderSkeleton";

function createExchangeLoader() {
  const container = document.createElement("div");
  const leftSide = document.createElement("div");
  const rightSide = document.createElement("div");

  const userCurrencies = createLoaderSkeleton(
    "client-currencies",
    "client-currencies--loader",
    `${EXCHANGE_PAGE_CLASS_NAME}__component`,
  );
  const exchangeForm = createLoaderSkeleton(
    `${EXCHANGE_PAGE_CLASS_NAME}__form-wrap`,
    `${EXCHANGE_PAGE_CLASS_NAME}__form`,
    `${EXCHANGE_PAGE_CLASS_NAME}__form--loader`,
    `${EXCHANGE_PAGE_CLASS_NAME}__component`,
  );
  const exchangeRates = createLoaderSkeleton(
    "rate-changes",
    "rate-changes--loader",
    `${EXCHANGE_PAGE_CLASS_NAME}__component`,
  );

  container.classList.add(`${EXCHANGE_PAGE_CLASS_NAME}__body`, "flex");
  leftSide.classList.add(`${EXCHANGE_PAGE_CLASS_NAME}__left-side`, "flex");
  rightSide.classList.add(`${EXCHANGE_PAGE_CLASS_NAME}__right-side`, "flex");

  leftSide.append(userCurrencies, exchangeForm);
  rightSide.append(exchangeRates);
  container.append(leftSide, rightSide);

  return container;
}

export default createExchangeLoader;
