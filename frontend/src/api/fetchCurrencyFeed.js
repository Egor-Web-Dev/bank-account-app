import BASE_URL from "../config/baseURL";

const BASE_URL_WS = BASE_URL.replace("http", "ws");

function fetchCurrencyFeed() {
  const path = "/currency-feed";

  return new WebSocket(`${BASE_URL_WS}${path}`);
}

export default fetchCurrencyFeed;
