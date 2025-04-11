import AuthToken from "./AuthToken";
import sendRequest from "./sendRequest";
import createRequest from "./createRequest";

async function fetchLocationBanks() {
  const path = "/banks";
  const options = {
    headers: {
      accept: "application/json",
      Authorization: `Basic ${AuthToken.get()}`,
    },
  };

  return await sendRequest(createRequest(path, options));
}

export default fetchLocationBanks;
