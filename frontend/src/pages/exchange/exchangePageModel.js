const exchangePageModel = {
  clientCurrencies: {},
  currencyCodes: [],
};

function setClientCurrencies(currencies) {
  exchangePageModel.clientCurrencies = { ...currencies };
}

function setCurrencyCodes(codes) {
  exchangePageModel.currencyCodes = [...codes];
}

function getClientCurrencies() {
  return { ...exchangePageModel.clientCurrencies };
}

function getCurrencyCodes() {
  return [...exchangePageModel.currencyCodes];
}

export {
  setClientCurrencies,
  setCurrencyCodes,
  getClientCurrencies,
  getCurrencyCodes,
};
