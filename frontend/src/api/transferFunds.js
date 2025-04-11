import AuthToken from "./AuthToken";
import sendRequest from "./sendRequest";
import createRequest from "./createRequest";

async function transferFunds(data) {
  const path = "/transfer-funds";
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      Authorization: `Basic ${AuthToken.get()}`,
    },
    body: data,
  };

  return await sendRequest(createRequest(path, options));
}

export default transferFunds;
