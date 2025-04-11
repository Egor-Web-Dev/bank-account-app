function transformCurrencyCodes(currencyCodes) {
  return currencyCodes.map((c) => {
    return { name: c, value: c };
  });
}

export default transformCurrencyCodes;
