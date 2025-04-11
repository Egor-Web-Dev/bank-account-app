import "./clientCurrencies.scss";
import createSection from "../Section/createSection";
import createClientCurrenciesList from "./createClientCurrenciesList";
import EXCHANGE_PAGE_CLASS_NAME from "../../../pages/exchange/pageClassName";
import { getClientCurrencies } from "../../../pages/exchange/exchangePageModel";

const BLOCK_OPTION = {
  title: "Ваши валюты",
  className: "client-currencies",
};

function createClientCurrenciesBlock() {
  const list = createClientCurrenciesList(getClientCurrencies());
  const wrapper = createSection(
    "h2",
    BLOCK_OPTION.title,
    BLOCK_OPTION.className,
    `${EXCHANGE_PAGE_CLASS_NAME}__component`,
    `${EXCHANGE_PAGE_CLASS_NAME}__component--focus-within`,
  );

  wrapper.append(list);

  return wrapper;
}

export default createClientCurrenciesBlock;
