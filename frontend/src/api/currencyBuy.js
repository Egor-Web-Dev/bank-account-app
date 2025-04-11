import AuthToken from "./AuthToken";
import sendRequest from "./sendRequest";
import createRequest from "./createRequest";

async function currencyBuy({ from, to, amount }) {
  const path = "/currency-buy";
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      Authorization: `Basic ${AuthToken.get()}`,
    },
    body: { from, to, amount },
  };

  return await sendRequest(createRequest(path, options));
}

export default currencyBuy;
