import createExchangeRatesList from "./createExchangeRatesList";

function updateExchangeRatesList(exchangeRates) {
  const oldList = document.querySelector(".rate-changes__list");
  oldList?.replaceWith(createExchangeRatesList(exchangeRates));
}

export default updateExchangeRatesList;
