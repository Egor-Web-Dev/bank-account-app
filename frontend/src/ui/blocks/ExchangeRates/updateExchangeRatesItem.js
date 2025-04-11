import createExchangeRatesItem from "./createExchangeRatesItem";

function updateExchangeRatesItem(exchangeRate) {
  const oldItem = document.getElementById(exchangeRate.codes);
  oldItem?.replaceWith(createExchangeRatesItem(exchangeRate));
}

export default updateExchangeRatesItem;
