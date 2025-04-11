const PAGE_PATH_NAME = {
  auth: "/",
  accounts: "/accounts",
  exchange: "/exchange",
  banks: "/banks",
  details: new RegExp(/^\/account\/\d+$/),
  history: new RegExp(/^\/account\/\d+\/history$/),
};

export default PAGE_PATH_NAME;
