import "./exchangeRatesList.scss";
import createSection from "../Section/createSection";
import fetchCurrencyFeed from "../../../api/fetchCurrencyFeed";
import fetchExchangeRates from "../../../api/fetchExchangeRates";
import updateExchangeRatesItem from "./updateExchangeRatesItem";
import createExchangeRatesList from "./createExchangeRatesList";
import updateExchangeRatesList from "./updateExchangeRatesList";
import EXCHANGE_PAGE_CLASS_NAME from "../../../pages/exchange/pageClassName";

const BLOCK_OPTION = {
  title: "Изменение курсов в реальном времени",
  className: "rate-changes",
};

function createExchangeRatesBlock() {
  const ws = fetchCurrencyFeed();
  const list = createExchangeRatesList();
  const wrapper = createSection(
    "h2",
    BLOCK_OPTION.title,
    BLOCK_OPTION.className,
    `${EXCHANGE_PAGE_CLASS_NAME}__component`,
    `${EXCHANGE_PAGE_CLASS_NAME}__component--focus-within`,
  );

  fetchExchangeRates().then((data) => {
    updateExchangeRatesList(data.payload);

    ws.onmessage = (m) => {
      updateExchangeRatesItem(transformExchangeRate(JSON.parse(m.data)));
    };
  });

  wrapper.append(list);

  return wrapper;
}

function transformExchangeRate({ from, to, rate, change }) {
  return {
    codes: `${from}/${to}`,
    rate,
    change,
  };
}

export default createExchangeRatesBlock;
