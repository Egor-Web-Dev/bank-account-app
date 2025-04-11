import PAGE_PATH_NAME from "../config/pagePath";
import renderAuthPage from "./auth/renderAuthPage";
import scrollToElement from "../utils/scrollToElement";
import renderErrorPage from "./errorPage/renderErrorPage";
import renderAccountsPage from "./accounts/renderAccountsPage";
import renderExchangePage from "./exchange/renderExchangePage";
import renderLocationBanksPage from "./banks/renderLocationBanksPage";
import renderBalanceHistoryPage from "./accountInfo/balanceHistory/renderBalanceHistoryPage";
import renderAccountHistoryPage from "./accountInfo/accountHistory/renderAccountHistoryPage";

function renderPage() {
  scrollToElement("header");
  LordOfPages.renderPage(location.pathname);
}

class LordOfPages {
  static renderPage(path) {
    switch (path) {
      case PAGE_PATH_NAME.auth:
        return renderAuthPage();
      case PAGE_PATH_NAME.accounts:
        return renderAccountsPage();
      case PAGE_PATH_NAME.banks:
        return renderLocationBanksPage();
      case PAGE_PATH_NAME.exchange:
        return renderExchangePage();
      case path.match(PAGE_PATH_NAME.details)?.[0]:
        return renderAccountHistoryPage(extractAccountNumber(path));
      case path.match(PAGE_PATH_NAME.history)?.[0]:
        return renderBalanceHistoryPage(extractAccountNumber(path));
      default:
        return renderErrorPage();
    }
  }
}

function extractAccountNumber(path) {
  return path.match(/\d+/)[0];
}

export default renderPage;
