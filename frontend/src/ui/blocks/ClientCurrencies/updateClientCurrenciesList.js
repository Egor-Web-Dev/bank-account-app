import createClientCurrenciesList from "./createClientCurrenciesList";

function updateClientCurrenciesList(currencies) {
  const oldList = document.querySelector(".client-currencies__list");
  oldList?.replaceWith(createClientCurrenciesList(currencies));
}

export default updateClientCurrenciesList;
