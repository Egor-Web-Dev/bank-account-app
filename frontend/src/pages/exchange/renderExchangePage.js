import getCleanMain from "../../utils/getCleanMain";
import createExchangePage from "./createExchangePage";
import fetchCurrencies from "../../api/fetchCurrencies";
import renderErrorPage from "../errorPage/renderErrorPage";
import fetchAllCurrencies from "../../api/fetchAllCurrencies";
import updateExchangeBody from "../../ui/sections/CurrencyExchangeBody/updateExchangeBody";
import { setNavState } from "../../ui/blocks/Navigation/navigationState";
import { setClientCurrencies, setCurrencyCodes } from "./exchangePageModel";

async function renderExchangePage() {
  setNavState({ activeItem: "Валюта", isShown: true });
  getCleanMain().append(createExchangePage());

  Promise.all([await fetchCurrencies(), await fetchAllCurrencies()]).then(
    ([currencies, allCurrencies]) => {
      const error = currencies.error || allCurrencies.error;

      if (error) return renderErrorPage(error);

      setClientCurrencies(currencies.payload);
      setCurrencyCodes(allCurrencies.payload);

      updateExchangeBody();
    },
  );
}

export default renderExchangePage;
