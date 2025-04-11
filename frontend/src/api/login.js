import AuthToken from "./AuthToken";
import sendRequest from "./sendRequest";
import createRequest from "./createRequest";

async function login(login, password) {
  const path = "/login";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: { login, password },
  };

  const data = await sendRequest(createRequest(path, options));

  if (data.payload) {
    AuthToken.set(data.payload.token);
  }

  return data;
}

export default login;
