import BASE_URL from "../config/baseURL";

function createRequest(path, options) {
  const { method, headers, body } = options;

  const result = {
    path: (BASE_URL + path).replace(/\/\/$/, ""),
    option: {
      method: method ? method : "GET",
      body: body ? JSON.stringify(body) : null,
      headers: {
        ...headers,
        ...(body
          ? {
              "Content-Type": "application/json",
            }
          : null),
      },
    },
  };

  return result;
}

export default createRequest;
