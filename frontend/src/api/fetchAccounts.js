import AuthToken from "./AuthToken";
import sendRequest from "./sendRequest";
import createRequest from "./createRequest";

async function fetchAccounts() {
  const path = "/accounts";
  const options = {
    headers: {
      accept: "application/json",
      Authorization: `Basic ${AuthToken.get()}`,
    },
  };

  return await sendRequest(createRequest(path, options));
}

export default fetchAccounts;
