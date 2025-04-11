import AuthToken from "./AuthToken";
import sendRequest from "./sendRequest";
import createRequest from "./createRequest";

async function createNewAccount() {
  const path = "/create-account";
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      Authorization: `Basic ${AuthToken.get()}`,
    },
  };

  return await sendRequest(createRequest(path, options));
}

export default createNewAccount;
