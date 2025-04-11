import sendRequest from "./sendRequest";
import createRequest from "./createRequest";

async function fetchAllCurrencies() {
  const path = "/all-currencies";
  const options = {
    headers: {
      accept: "application/json",
    },
  };

  return await sendRequest(createRequest(path, options));
}

export default fetchAllCurrencies;
