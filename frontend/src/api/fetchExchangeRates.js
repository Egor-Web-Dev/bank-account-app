import sendRequest from "./sendRequest";
import createRequest from "./createRequest";

async function fetchExchangeRates() {
  const path = "/currency-feed";
  const options = {
    headers: {
      accept: "application/json",
    },
  };

  return await sendRequest(createRequest(path, options));
}

export default fetchExchangeRates;
