import "./exchangeFormBlock.scss";
import createSection from "../Section/createSection";
import createCurrencyExchangeForm from "./createExchangeForm";
import transformCurrencyCodes from "./transformCurrencyCodes";
import EXCHANGE_PAGE_CLASS_NAME from "../../../pages/exchange/pageClassName";
import { getCurrencyCodes } from "../../../pages/exchange/exchangePageModel";

const BLOCK_OPTION = {
  title: "Обмен валюты",
  className: `${EXCHANGE_PAGE_CLASS_NAME}__form-wrap`,
};

function createExchangeFormBlock() {
  const codes = transformCurrencyCodes(getCurrencyCodes());
  const form = createCurrencyExchangeForm(codes);
  const wrapper = createSection(
    "h2",
    BLOCK_OPTION.title,
    BLOCK_OPTION.className,
    `${EXCHANGE_PAGE_CLASS_NAME}__component`,
  );

  wrapper.append(form);

  return wrapper;
}

export default createExchangeFormBlock;
